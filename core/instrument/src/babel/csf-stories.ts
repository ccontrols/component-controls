import {
  StoriesStore,
  Story,
  StoriesDoc,
  Stories,
} from '@component-controls/specification';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './extract-function-parameters';
import { extractAttributes } from './extract-attributes';
import { followStoryImport } from './follow-imports';
import { componentsFromParams } from '../misc/component-attributes';
import { sourceLocation } from '../misc/source-location';
import { ParseStorieReturnType, InstrumentOptions } from '../types';

export const extractCSFStories = (
  ast: File,
  _options: InstrumentOptions,
  { source, filePath }: { source: string; filePath: string },
): ParseStorieReturnType => {
  const globals: Stories = {};
  const localStories: Stories = {};

  const extractArrowFunction = (
    path: any,
    declaration: any,
  ): Story | undefined => {
    if (declaration.init) {
      switch (declaration.init.type) {
        case 'ArrowFunctionExpression': {
          const el = declaration.init.body;
          const name = declaration.id.name;
          const story: Story = {
            loc: sourceLocation(el.loc),
            name,
            id: name,
          };
          traverse(path.node, extractFunctionParameters(story), path.scope);
          return story;
        }
        case 'Identifier': {
          return followStoryImport(
            declaration.id.name,
            declaration.init.name,
            filePath,
            source,
            _options,
            ast,
          );
        }
      }
    }
    return undefined;
  };
  let components: { [key: string]: string | undefined } = {};
  const store: StoriesStore = {
    stories: {},
    docs: {},
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
        const doc: StoriesDoc = {
          ...attributes,
          components: {},
        };
        if (attrComponents.length > 0) {
          doc.component = attrComponents[0];
        }
        store.docs[title] = doc;
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
  if (Object.keys(store.docs).length === 1) {
    //@ts-ignore
    store.docs[Object.keys(store.docs)[0]].components = components;
  } else {
    throw new Error(`stories should have one default export`);
  }
  return store;
};
