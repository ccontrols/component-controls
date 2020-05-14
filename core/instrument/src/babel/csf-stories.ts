import {
  StoriesStore,
  Story,
  StoriesKind,
  Stories,
} from '@component-controls/specification';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './extract-function-parameters';
import { extractAttributes } from './extract-attributes';
import { componentsFromParams } from '../misc/component-attributes';
import { sourceLocation } from '../misc/source-location';
import { ParseStorieReturnType, InstrumentOptions } from '../types';

export const extractCSFStories = (
  ast: File,
  _options: InstrumentOptions,
): ParseStorieReturnType => {
  const globals: Stories = {};
  const localStories: Stories = {};

  const extractArrowFunction = (
    path: any,
    declaration: any,
  ): Story | undefined => {
    if (
      declaration.init &&
      declaration.init.type === 'ArrowFunctionExpression'
    ) {
      const el = declaration.init.body;
      const name = declaration.id.name;
      const story: Story = {
        loc: sourceLocation(el.loc),
        name,
        id: name,
      };
      traverse(path.node, extractFunctionParameters(story), path.scope, path);
      return story;
    }
    return undefined;
  };
  let components: { [key: string]: string | undefined } = {};
  const store: StoriesStore = {
    stories: {},
    kinds: {},
    components: {},
    packages: {},
  };
  traverse(ast as any, {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      const attributes = extractAttributes(declaration);

      const { title } = attributes || {};
      if (typeof title === 'string') {
        const attrComponents = componentsFromParams(attributes);
        components = attrComponents.reduce(
          (acc, componentName) => ({ ...acc, [componentName]: undefined }),
          components,
        );
        const kind: StoriesKind = {
          ...attributes,
          components: {},
        };
        if (attrComponents.length > 0) {
          kind.component = attrComponents[0];
        }
        store.kinds[title] = kind;
      }
    },
    AssignmentExpression: (path: any) => {
      const node = path.node;
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        node.left.property.name === 'story' &&
        node.right.type === 'ObjectExpression'
      ) {
        const storyName = node.left.object.name;
        const { name = storyName, ...attributes } = extractAttributes(
          node.right,
        );
        globals[storyName] = {
          ...attributes,
          name,
        };

        if (store.stories[storyName]) {
          const attrComponents = componentsFromParams(attributes);
          components = attrComponents.reduce(
            (acc, componentName) => ({ ...acc, [componentName]: undefined }),
            components,
          );
          const story: Story = {
            ...attributes,
            ...store.stories[storyName],
            name,
          };
          if (attrComponents.length > 0) {
            story.component = attrComponents[0];
          }
          store.stories[storyName] = story;
        }
      }
    },
    VariableDeclaration: (path: any) => {
      const { declarations } = path.node;
      if (Array.isArray(declarations) && declarations.length > 0) {
        const declaration = declarations[0];
        if (declaration) {
          const name = declaration.id.name;
          //check if it was a named export
          if (!store.stories[name]) {
            const story = extractArrowFunction(path, declaration);
            if (story && story.name) {
              localStories[story.name] = story;
            }
          }
        }
      }
    },
    ExportSpecifier: (path: any) => {
      const { node } = path;
      const localName = node.local.name;
      const exportedName = node.exported.name;
      const story = localStories[localName];
      if (story) {
        const global = globals[localName];
        if (global) {
          localStories[localName] = {
            ...story,
            ...global,
          };
        }
        store.stories[exportedName] = story;
      }
    },
    ExportNamedDeclaration: (path: any) => {
      const { declaration } = path.node;
      if (declaration) {
        const { declarations } = declaration;
        if (Array.isArray(declarations) && declarations.length > 0) {
          const story = extractArrowFunction(path, declarations[0]);
          if (story) {
            const name = story.name;
            store.stories[name] = {
              ...story,
              ...globals[name],
            };
          }
        }
      }
    },
  });
  if (Object.keys(store.kinds).length === 1) {
    //@ts-ignore
    store.kinds[Object.keys(store.kinds)[0]].components = components;
  } else {
    throw new Error(`CSF stories should have one default export`);
  }
  return store;
};
