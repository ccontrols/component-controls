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
  if (globalCache[filePath]) {
    return globalCache[filePath];
  }
  const follow = followImports(
    componentName,
    filePath,
    source,
    options,
    initialAST,
  );
  const { components } = options || {};
  const component: StoryComponent = follow
    ? {
        name: componentName,
        from: follow.from,
        request: follow.filePath,
        loc: follow.loc,
        importedName: follow.importedName,
        source: components?.storeSourceFile ? follow.source : undefined,
        repository: await packageInfo(
          follow.originalFilePath,
          options?.components?.package,
        ),
      }
    : {
        name: componentName,
      };
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
          store.components[filePath] = component;
          kind.components[componentName] = filePath;
        }
      }
    }
  }
};
