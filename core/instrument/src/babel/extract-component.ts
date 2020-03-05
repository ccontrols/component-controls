import * as resolve from 'resolve';
import * as parser from '@babel/parser';
import {
  StoriesStore,
  StoryArgument,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';
import { followImports } from './follow-imports';
import { packageInfo } from '../project/packageInfo';

const componentFromParams = (
  parameters?: StoryArguments,
): string | undefined => {
  if (parameters) {
    let component = parameters.find(
      (p: StoryArgument) => p.name === 'component',
    );
    if (!component) {
      const params = parameters.find(
        (p: StoryArgument) => p.name === 'parameters',
      );
      if (params) {
        component = (params.value as StoryArguments).find(
          (p: StoryArgument) => p.name === 'component',
        );
      }
    }
    if (component) {
      if (typeof component.value === 'string') {
        return component.value as string;
      }
      if (
        Array.isArray(component.value) &&
        component.value.length > 0 &&
        typeof component.value[0].value === 'string'
      ) {
        return component.value[0].value;
      }
    }
  }
  return undefined;
};

export const extractComponent = async (
  componentName: string,
  filePath?: string,
  parserOptions?: parser.ParserOptions,
  resolveOptions?: resolve.SyncOpts,
  initialAST?: File,
): Promise<StoryComponent | undefined> => {
  const follow = followImports(
    componentName,
    filePath,
    parserOptions,
    resolveOptions,
    initialAST,
  );
  return follow
    ? {
        name: componentName,
        from: follow.from,
        request: follow.filePath,
        loc: follow.loc,
        source: follow.source,
        repository: await packageInfo(follow.filePath),
      }
    : undefined;
};

export const extractSotreComponent = async (
  store: StoriesStore,
  filePath?: string,
  parserOptions?: parser.ParserOptions,
  resolveOptions?: resolve.SyncOpts,
  initialAST?: File,
) => {
  const kinds = Object.keys(store.kinds);
  if (kinds.length > 0) {
    const kind = store.kinds[kinds[0]];
    const componentName = componentFromParams(kind.parameters);

    if (componentName) {
      const component = await extractComponent(
        componentName,
        filePath,
        parserOptions,
        resolveOptions,
      );
      if (component) {
        store.components[componentName] = component;
        kind.component = componentName;
      }
    }
  }
  Object.keys(store.stories).forEach(async (name: string) => {
    const story = store.stories[name];
    const componentName = componentFromParams(story.parameters);
    if (componentName) {
      const component = await extractComponent(
        componentName,
        filePath,
        parserOptions,
        resolveOptions,
      );
      if (component) {
        store.components[componentName] = component;
        story.component = componentName;
      }
    }
  });
};
