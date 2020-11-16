import { Story, Document, Stories } from '@component-controls/core';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { extractFunctionParameters } from './extract-function-parameters';
import { extractAttributes } from './extract-attributes';
import { followStoryImport } from './follow-imports';
import { componentsFromParams } from '../misc/component-attributes';
import { sourceLocation } from '../misc/source-location';
import {
  LoadingDocStore,
  ParseStorieReturnType,
  InstrumentOptions,
} from '../types';

export const extractCSFStories = (
  ast: File,
  _options: InstrumentOptions,
  { source, filePath }: { source: string; filePath: string },
): ParseStorieReturnType => {
  const globals: Stories = {};
  const localFunctions: Stories = {};

  const extractFunction = (
    path: any,
    declaration: any,
    name: string,
  ): Story | undefined => {
    if (declaration.init) {
      switch (declaration.init.type) {
        case 'ArrowFunctionExpression': {
          const el = declaration.init.body;
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
            name,
            declaration.init.name,
            filePath,
            source,
            _options,
            ast,
          );
        }
        case 'ObjectExpression': {
          if (store.doc?.template) {
            const template = store.doc.template;
            const story: Story = {
              name,
              id: name,
              loc: template.loc,
              arguments: template.arguments,
            };
            return story;
          }
          break;
        }
        case 'CallExpression': {
          //template.bind
          if (declaration.init.callee?.property?.name === 'bind') {
            const callee = declaration.init.callee?.object;
            if (callee?.name) {
              const template = localFunctions[callee.name];
              if (template) {
                const story: Story = {
                  loc: template.loc,
                  name,
                  id: name,
                  arguments: template.arguments,
                };
                return story;
              }
            }
          }
        }
      }
    } else if (declaration.type === 'FunctionDeclaration') {
      const story: Story = {
        loc: sourceLocation(declaration.body.loc),
        name,
        id: name,
      };
      traverse(path.node, extractFunctionParameters(story), path.scope);
      return story;
    }
    return undefined;
  };
  let components: { [key: string]: string | undefined } = {};
  const store: LoadingDocStore = {
    stories: {},
    doc: undefined,
    components: {},
    packages: {},
  };
  traverse(ast as any, {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      const attributes = extractAttributes(declaration);
      const template = declaration?.expression?.properties.find(
        (prop: any) =>
          prop.key?.name === 'template' &&
          prop.value?.type === 'ArrowFunctionExpression',
      );
      const { title: docTitle, name } = attributes || {};
      if (template) {
        delete attributes.template;
      }

      const title = docTitle || name;
      if (typeof title === 'string') {
        const attrComponents = componentsFromParams(attributes);
        components = attrComponents.reduce(
          (acc, componentName) => ({ ...acc, [componentName]: undefined }),
          components,
        );
        const doc: Document = {
          ...attributes,
          title,
          components: {},
        };
        if (attrComponents.length > 0) {
          doc.component = attrComponents[0];
        }
        if (template) {
          doc.template = extractFunction(
            path,
            { init: template.value },
            template.key.name,
          ) as Document['template'];
        }
        store.doc = doc;
      }
    },
    AssignmentExpression: (path: any) => {
      const node = path.node;
      const storyExport = node.left?.object?.name;
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier' &&
        store.stories[storyExport]
      ) {
        const extractedValue = extractAttributes(node.right);
        const extractedProps =
          node.left.property.name === 'story'
            ? extractedValue
            : { [node.left.property.name]: extractedValue };
        const { name, storyName, ...attributes } = extractedProps;

        const nameAttr = storyName || name;
        if (store.stories[storyExport]) {
          const attrComponents = componentsFromParams(attributes);
          components = attrComponents.reduce(
            (acc, componentName) => ({ ...acc, [componentName]: undefined }),
            components,
          );
          const story: Story = {
            ...attributes,
            ...store.stories[storyExport],
          };
          if (nameAttr) {
            story.name = nameAttr;
          }
          store.stories[storyExport] = story;
          globals[storyExport] = story;
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
            const story = extractFunction(path, declaration, name);
            if (story && story.name) {
              localFunctions[story.name] = story;
            }
          }
        }
      }
    },
    ExportSpecifier: (path: any) => {
      const { node } = path;
      const localName = node.local.name;
      const exportedName = node.exported.name;
      const story = localFunctions[localName];
      if (story) {
        const global = globals[localName];
        if (global) {
          localFunctions[localName] = {
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
        if (declarations) {
          if (Array.isArray(declarations) && declarations.length > 0) {
            const story = extractFunction(
              path,
              declarations[0],
              declarations[0].id.name,
            );
            if (story) {
              const name = story.name;
              store.stories[name] = {
                ...story,
                ...globals[name],
              };
            }
          }
        } else {
          if (declaration.type === 'FunctionDeclaration') {
            const story = extractFunction(
              path,
              declaration,
              declaration.id.name,
            );
            if (story) {
              const name = story.name;
              store.stories[name] = {
                ...story,
                ...globals[name],
              };
            }
          }
        }
      }
    },
  });
  if (store.doc) {
    store.doc.componentsLookup = components as Document['componentsLookup'];
  } else {
    throw new Error(`esm files should have one default export`);
  }
  return store;
};
