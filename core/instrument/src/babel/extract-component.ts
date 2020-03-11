import { File } from '@babel/types';
import {
  StoriesStore,
  StoryAttributes,
  StoryComponent,
  StoriesKind,
} from '@component-controls/specification';
import { followImports } from './follow-imports';
import { packageInfo } from '../project/packageInfo';
import { InstrumentOptions } from '../types';

const componentFromParams = (
  attributes?: StoryAttributes,
): string | undefined => {
  if (attributes) {
    let component = attributes['component'];
    if (!component) {
      const params = attributes['parameters'];
      if (params) {
        component = params['component'];
      }
    }
    if (component) {
      if (typeof component === 'string') {
        return component as string;
      }
      if (
        Array.isArray(component) &&
        component.length > 0 &&
        typeof component[0].value === 'string'
      ) {
        return component[0].value;
      }
    }
  }
  return undefined;
};

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
  const { extractPropsFn } = options || {};
  if (follow && follow.filePath && typeof extractPropsFn === 'function') {
    component.info = await extractPropsFn(
      follow.filePath,
      component.importedName,
      follow.source,
    );
    if (component.info) {
      console.log(component.info);
    } else {
      console.log(follow.filePath);
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
    kind.components = {};
    const componentName = componentFromParams(kind.attributes);

    if (componentName) {
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
        kind.component = componentName;
      }
    }
    Object.keys(store.stories).forEach(async (name: string) => {
      const story = store.stories[name];
      const componentName = componentFromParams(story.attributes);
      if (componentName) {
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
          story.component = componentName;
        }
      }
    });
  }
};
