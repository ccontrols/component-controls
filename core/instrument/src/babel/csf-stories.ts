import {
  StoriesStore,
  Story,
  Stories,
} from '@component-controls/specification';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './get-function-parameters';
import { extractAttributes } from './extract-attributes';
import { sourceLocation } from './utils';

export const extractCSFStories = (stories: StoriesStore) => {
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
  return {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      const attributes = extractAttributes(declaration);

      const title = attributes ? attributes['title'] : null;
      const kindTitle = typeof title === 'string' ? title : undefined;
      if (kindTitle) {
        stories.kinds[kindTitle] = {
          title: kindTitle,
          attributes,
          components: {},
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
        const nameProp = attributes ? attributes['name'] : null;
        const name = nameProp ? nameProp : storyName;
        globals[storyName] = {
          attributes,
          name,
        };

        const story = stories.stories[storyName];

        if (story) {
          story.name = name;
          story.attributes = attributes;
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
          if (!stories.stories[name]) {
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
          story.name = global.name;
          story.attributes = global.attributes;
        }
        stories.stories[exportedName] = story;
      }
    },
    ExportNamedDeclaration: (path: any) => {
      const { declaration } = path.node;
      if (declaration) {
        const { declarations } = declaration;
        if (Array.isArray(declarations) && declarations.length > 0) {
          const story = extractArrowFunction(path, declarations[0]);
          if (story) {
            const name = story.name || '';
            const global = globals[name];
            if (global) {
              story.name = global.name;
              story.attributes = global.attributes;
            }
            stories.stories[name] = story;
          }
        }
      }
    },
  };
};
