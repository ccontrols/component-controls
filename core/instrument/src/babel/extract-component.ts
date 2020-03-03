import nodePath from 'path';
import * as resolve from 'resolve';
import traverse from '@babel/traverse';
import {
  StoriesStore,
  StoryArgument,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';

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

const findComponentImport = (
  ast: any,
  componentName: string,
  resolveOptions: resolve.SyncOpts,
  filePath?: string,
): StoryComponent | undefined => {
  let result: StoryComponent | undefined = undefined;
  traverse(ast, {
    ImportDeclaration: (path: any) => {
      const node = path.node;
      for (let i = 0; i < node.specifiers.length; i += 1) {
        const specifier = node.specifiers[i];
        if (specifier.local && specifier.local.name === componentName) {
          result = {
            name: specifier.local.name,
            imported: specifier.imported
              ? specifier.imported.name
              : specifier.type === 'ImportDefaultSpecifier'
              ? 'default'
              : undefined,
            from: node.source ? node.source.value : undefined,
            loc: node.loc,
          };
          if (node.source.value && filePath) {
            const folderName = nodePath.dirname(filePath);
            const resolveName = resolve.sync(node.source.value, {
              ...resolveOptions,
              basedir: folderName,
            });
            console.log(resolveName);
          }
          path.skip();
          break;
        }
      }
    },
  });
  return result;
};

export const extractComponent = async (
  ast: any,
  store: StoriesStore,
  resolveOptions: resolve.SyncOpts,
  filePath?: string,
) => {
  const kinds = Object.keys(store.kinds);
  if (kinds.length > 0) {
    const kind = store.kinds[kinds[0]];
    const componentName = componentFromParams(kind.parameters);
    if (componentName) {
      const component = findComponentImport(
        ast,
        componentName,
        resolveOptions,
        filePath,
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
      const component = findComponentImport(
        ast,
        componentName,
        resolveOptions,
        filePath,
      );
      if (component) {
        store.components[componentName] = component;
        story.component = componentName;
      }
    }
  });
};
