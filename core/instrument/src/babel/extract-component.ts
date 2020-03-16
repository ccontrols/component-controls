import { File } from '@babel/types';
import {
  StoriesStore,
  StoryComponent,
  StoriesKind,
} from '@component-controls/specification';
import { followImports } from './follow-imports';
import { packageInfo } from '../misc/packageInfo';
import { propsInfo } from '../misc/propsInfo';
import { InstrumentOptions } from '../types';

const globalCache: {
  [filePath: string]: StoryComponent;
} = {};
export const extractComponent = async (
  componentName: string,
  filePath: string,
  source?: string,
  options?: InstrumentOptions,
  initialAST?: File,
): Promise<StoryComponent | undefined> => {
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
  if (follow) {
    component = {
      name: componentName,
      from: follow.from,
      request: follow.filePath,

      importedName: follow.importedName,
    };
    if (components?.storeSourceFile) {
      component.source = follow.source;
      component.loc = follow.loc;
    }
    const repository = await packageInfo(
      follow.originalFilePath,
      options?.components?.package,
    );
    if (repository !== undefined) {
      component.repository = repository;
    }
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
  globalCache[filePath] = component;
  return component;
};

export const extractStoreComponent = async (
  store: StoriesStore,
  filePath: string,
  source: string,
  options?: InstrumentOptions,
  initialAST?: File,
) => {
  const kinds = Object.keys(store.kinds);
  if (kinds.length > 0) {
    const kind: StoriesKind = store.kinds[kinds[0]];
    const componentNames = Object.keys(kind.components);
    if (componentNames) {
      for (const componentName of componentNames) {
        const component = await extractComponent(
          componentName,
          filePath,
          source,
          options,
          initialAST,
        );
        if (component) {
          const componentKey = component.request ?? filePath;
          store.components[componentKey] = component;
          kind.components[componentName] = componentKey;
        }
      }
    }
  }
};
