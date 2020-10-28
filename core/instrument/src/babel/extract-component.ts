import { File } from '@babel/types';
import { Component, Document, PackageInfo } from '@component-controls/core';
import { hashStoreId } from '../misc/hashStore';
import { followImports } from './follow-imports';
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
  const { components } = options || {};
  let component: Component;
  let componentPackage: PackageInfo | undefined;
  if (follow) {
    component = {
      name: componentName,
    };
    if (follow.from) {
      component.from = follow.from;
    }
    if (follow.filePath) {
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
    }
    if (follow.imports) {
      component.imports = follow.imports;
    }
    if (follow.importedName) {
      component.importedName = follow.importedName;
    }
    if (follow.filePath) {
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
            const componentKey = hashStoreId(
              `${component.request ?? filePath}-${componentName}`,
            );
            store.components[componentKey] = component;
            doc.componentsLookup[componentName] = componentKey;
          }
        }
      }
    }
  }
};
