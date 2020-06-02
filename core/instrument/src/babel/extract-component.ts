import { File } from '@babel/types';
import {
  StoriesStore,
  StoryComponent,
  StoriesDoc,
  PackageInfo,
} from '@component-controls/specification';
import { hashStoreId } from '../misc/hashStore';
import { followImports } from './follow-imports';
import { packageInfo } from '../misc/package-info';
import { propsInfo } from '../misc/props-info';
import { InstrumentOptions } from '../types';

interface ComponentParseData {
  component?: StoryComponent;
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
  let component: StoryComponent;
  let componentPackage: PackageInfo | undefined;
  if (follow) {
    component = {
      name: componentName,
      from: follow.from,
      request: follow.filePath,
      imports: follow.imports,
      importedName: follow.importedName,
    };
    if (components?.storeSourceFile) {
      component.source = follow.source;
      component.loc = follow.loc;
    }
    componentPackage = await packageInfo(
      follow.originalFilePath,
      options?.components?.package,
    );
  } else {
    component = {
      name: componentName,
    };
  }
  const { propsLoaders } = options || {};
  if (follow && follow.filePath && Array.isArray(propsLoaders)) {
    const info = await propsInfo(
      propsLoaders,
      follow.filePath,
      follow.importedName,
      follow.source,
    );
    if (info) {
      component.info = info;
    }
  }
  globalCache[filePath] = { component, componentPackage };
  return globalCache[filePath];
};

export const extractStoreComponent = async (
  store: StoriesStore,
  filePath: string,
  source: string,
  options?: InstrumentOptions,
  initialAST?: File,
) => {
  const docs = Object.keys(store.docs);
  if (docs.length > 0) {
    const doc: StoriesDoc = store.docs[docs[0]];
    const componentNames = Object.keys(doc.components);
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
          doc.components[componentName] = componentKey;
        }
      }
    }
  }
};
