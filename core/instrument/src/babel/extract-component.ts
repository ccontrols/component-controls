import path from 'path';
import { File } from '@babel/types';
import * as resolve from 'resolve';
import {
  Component,
  Document,
  PackageInfo,
  Imports,
  ImportTypes,
} from '@component-controls/core';
import { componentKey } from '../misc/hashStore';
import { followImports } from './follow-imports';
import { analyze_components } from './analyze-component';
import { packageInfo } from '../misc/package-info';
import { readSourceFile } from '../misc/source-options';

import { LoadingDocStore, InstrumentOptions } from '../types';

interface ComponentParseData {
  component?: Component;
  componentPackage?: PackageInfo;
}
const globalCache: {
  [filePath: string]: ComponentParseData;
} = {};
export const extractComponent = async (
  componentName: string,
  filePath: string,
  source?: string,
  options?: InstrumentOptions,
  initialAST?: File,
): Promise<ComponentParseData> => {
  const cacheKey = `${filePath}-${componentName}`;
  if (globalCache[cacheKey]) {
    return globalCache[cacheKey];
  }
  const follow = followImports(
    componentName,
    filePath,
    source,
    options,
    initialAST,
  );
  const { components, resolver: resolveOptions } = options || {};
  let component: Component;
  let componentPackage: PackageInfo | undefined;
  if (follow) {
    component = {
      name: componentName,
    };
    if (follow.from) {
      component.from = follow.from;
    }
    if (follow.imports) {
      const imports: ImportTypes = follow.imports;
      const allImports = Object.keys(imports).reduce((acc: Imports, key) => {
        const { name, from, importedName } = imports[key];
        let importKey = undefined;
        if (follow.filePath && from.startsWith('.')) {
          try {
            const fileName = resolve.sync(from, {
              ...resolveOptions,
              basedir: path.dirname(follow.filePath),
            });
            const followImport = followImports(
              importedName,
              fileName,
              undefined,
              options,
              undefined,
            );
            if (followImport?.filePath) {
              importKey = componentKey(followImport.filePath, importedName);
            }
          } catch (e) {}
        }

        if (acc[from]) {
          return {
            ...acc,
            [from]: [
              ...acc[from],
              { name, from, importedName, key: importKey },
            ],
          };
        }
        return {
          ...acc,
          [from]: [{ name, from, importedName, key: importKey }],
        };
      }, {});
      component.externalDependencies = Object.keys(allImports)
        .filter(key => !key.startsWith('.'))
        .reduce(
          (acc, key) => ({ ...acc, [key]: (allImports as Imports)[key] }),
          {},
        );
      component.localDependencies = Object.keys(allImports)
        .filter(key => key.startsWith('.'))
        .reduce((acc, key) => {
          return { ...acc, [key]: (allImports as Imports)[key] };
        }, {});
    }
    if (follow.importedName) {
      component.importedName = follow.importedName;
    }
    if (follow.filePath) {
      if (follow.imports) {
        analyze_components(component, follow.filePath, options);
      }

      component.request = follow.filePath;
      if (components && typeof components.resolvePropsFile === 'function') {
        const propsFile = components.resolvePropsFile(
          componentName,
          follow.filePath,
        );
        if (propsFile !== component.request) {
          component.propsInfoFile = propsFile;
        }
      }
      const saveSource = readSourceFile(
        components?.sourceFiles,
        follow.source,
        componentName,
        follow.filePath,
      );
      if (saveSource) {
        component.source = saveSource;
        component.loc = follow.loc;
      }
    }
    componentPackage = await packageInfo(
      componentName,
      follow.originalFilePath,
      options?.components?.package,
    );
  } else {
    component = {
      name: componentName,
    };
  }

  globalCache[cacheKey] = { component, componentPackage };
  return globalCache[cacheKey];
};

export const extractStoreComponent = async (
  store: LoadingDocStore,
  filePath: string,
  source: string,
  options?: InstrumentOptions,
  initialAST?: File,
): Promise<void> => {
  if (store.doc) {
    const doc: Document = store.doc;
    if (doc.componentsLookup) {
      const componentNames = Object.keys(doc.componentsLookup);
      if (componentNames) {
        for (const componentName of componentNames) {
          const { component, componentPackage } = await extractComponent(
            componentName,
            filePath,
            source,
            options,
            initialAST,
          );
          if (component) {
            if (componentPackage) {
              store.packages[componentPackage.fileHash] = componentPackage;
              component.package = componentPackage.fileHash;
            }
            const key = componentKey(
              component.request ?? filePath,
              componentName,
            );
            store.components[key] = component;
            doc.componentsLookup[componentName] = key;
          }
        }
      }
    }
  }
};
