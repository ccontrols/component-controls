import {
  StoriesStore,
  Story,
  Stories,
} from '@component-controls/specification';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractAttributes } from './extract-attributes';
import { componentsFromParams } from '../misc/componentAttributes';
import { sourceLocation } from './utils';

export const extractCSFStories = (ast: File): StoriesStore => {
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
      };
      traverse(path.node, extractFunctionParameters(story), path.scope, path);
      return story;
    }
    return undefined;
  };
  const store: StoriesStore = {
    stories: {},
    kinds: {},
    components: {},
  };
  traverse(ast, {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      const attributes = extractAttributes(declaration);

      const { title } = attributes || {};
      if (typeof title === 'string') {
        const components = componentsFromParams(attributes);
        store.kinds[title] = {
          ...attributes,
          components: components.reduce(
            (acc, componentName) => ({ ...acc, [componentName]: undefined }),
            {},
          ),
        };
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
        const attributes = extractAttributes(node.right);
        const { name = storyName } = attributes;
        globals[storyName] = {
          ...attributes,
          name,
        };

        if (store.stories[storyName]) {
          store.stories[storyName] = {
            ...attributes,
            name,
            ...store.stories[storyName],
          };
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
  return store;
};
