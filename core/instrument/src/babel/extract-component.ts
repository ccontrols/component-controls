import path from 'path';
import * as resolve from 'resolve';
import {
  Component,
  Document,
  PackageInfo,
  Imports,
  ImportTypes,
  isLocalImport,
} from '@component-controls/core';
import { componentKey } from '../misc/hashStore';
import { followImports } from './follow-imports';
import { analyze_components } from './analyze-component';
import { packageInfo } from '../misc/package-info';
import { readSourceFile } from '../misc/source-options';
import { LoadingDocStore, InstrumentOptions } from '../types';

export interface ComponentParseData {
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
): Promise<ComponentParseData> => {
  const cacheKey = `${filePath}-${componentName}`;
  if (globalCache[cacheKey]) {
    return globalCache[cacheKey];
  }
  const follow = followImports(componentName, filePath, source, options);
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
        if (follow.filePath && isLocalImport(from)) {
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
              importKey
                ? { name, importedName, componentKey: importKey }
                : { name, importedName },
            ],
          };
        }
        return {
          ...acc,
          [from]: [
            importKey
              ? { name, importedName, componentKey: importKey }
              : { name, importedName },
          ],
        };
      }, {});
      component.externalDependencies = Object.keys(allImports)
        .filter(key => !isLocalImport(key))
        .reduce(
          (acc, key) => ({ ...acc, [key]: (allImports as Imports)[key] }),
          {},
        );
      component.localDependencies = Object.keys(allImports)
        .filter(key => isLocalImport(key))
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
      component.fileName = path.basename(follow.filePath);
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
      if (components && typeof components.resolvePropsFile === 'function') {
        const propsFile = components.resolvePropsFile(
          componentName,
          follow.filePath,
        );
        if (propsFile !== component.request) {
          component.propsInfoFile = propsFile;
        }
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
): Promise<void> => {
  if (store.doc) {
    const doc: Document = store.doc;
    if (doc.componentsLookup) {
      const components = doc.componentsLookup;
      if (
        typeof doc.component === 'string' &&
        components[doc.component] === undefined
      ) {
        components[doc.component] = doc.component;
      }
      const componentNames = Object.keys(components);
      if (componentNames) {
        for (const componentName of componentNames) {
          const { component, componentPackage } = await extractComponent(
            componentName,
            filePath,
            source,
            options,
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
