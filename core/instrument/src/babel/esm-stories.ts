import { Document, Stories } from '@component-controls/core';
import { File } from '@babel/types';
import traverse, { NodePath } from '@babel/traverse';
import { extractAttributes } from './extract-attributes';
import { componentsFromParams } from '../misc/component-attributes';
import {
  LoadingDocStore,
  ParseStorieReturnType,
  InstrumentOptions,
} from '../types';
import {
  extractFunction as extractFunctionTemplate,
  extractVarFunction,
} from './extract-function';
export const extractCSFStories = (
  ast: File,
  _options: InstrumentOptions,
  { source, filePath }: { source: string; filePath: string },
): ParseStorieReturnType => {
  const globals: Stories = {};
  const locals: Stories = {};

  let components: { [key: string]: string | undefined } = {};
  const store: LoadingDocStore = {
    stories: {},
    doc: undefined,
    components: {},
    packages: {},
  };
  const extractFunction = (path: NodePath, declaration: any, name: string) =>
    extractFunctionTemplate(
      _options,
      { source, filePath },
      path,
      declaration,
      name,
      store.doc?.template,
      locals,
    );
  traverse(ast, {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      let attributes: ReturnType<typeof extractAttributes>;
      let template: any;
      if (declaration.type === 'Identifier') {
        attributes = { ...locals[declaration.name] };
        delete attributes['id'];
        delete attributes['name'];
      } else {
        attributes = extractAttributes(declaration);
        template = declaration.expression?.properties.find(
          (prop: any) =>
            prop.key?.name === 'template' &&
            prop.value?.type === 'ArrowFunctionExpression',
        );
      }
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
        const doc: Partial<Document> = {
          ...attributes,
          title,
        };
        if (attrComponents.length > 0) {
          doc.component = attrComponents[0];
        }
        if (template) {
          doc.template = extractFunction(
            path as NodePath,
            { type: 'VariableDeclarator', init: template.value },
            template.key.name,
          ) as Document['template'];
        }
        store.doc = doc as Document;
      }
    },
    AssignmentExpression: (path: any) => {
      const node = path.node;
      if (
        node.left.type === 'MemberExpression' &&
        node.left.property.type === 'Identifier'
      ) {
        const storyExport = node.left?.object?.name;
        let story = store.stories[storyExport] || {
          name: storyExport,
          id: storyExport,
        };
        const extractedValue = extractAttributes(node.right);
        const extractedProps =
          node.left.property.name === 'story'
            ? extractedValue
            : { [node.left.property.name]: extractedValue };
        const { name, storyName, ...attributes } = extractedProps;

        const nameAttr = storyName || name;
        const attrComponents = componentsFromParams(attributes);
        components = attrComponents.reduce(
          (acc, componentName) => ({ ...acc, [componentName]: undefined }),
          components,
        );
        story = {
          ...story,
          ...attributes,
        };
        if (nameAttr) {
          story.name = nameAttr;
        }
        if (store.stories[storyExport]) {
          store.stories[storyExport] = story;
          globals[storyExport] = story;
        } else {
          locals[storyExport] = story;
        }
      }
    },
    VariableDeclaration: (path: any) => {
      const story = extractVarFunction(
        _options,
        { source, filePath },
        path,
        store.doc?.template,
        locals,
      );
      if (story && story.name) {
        locals[story.name] = story;
      }
    },
    ExportSpecifier: (path: any) => {
      const { node } = path;
      const localName = node.local.name;
      const exportedName = node.exported.name;
      const story = locals[localName];
      if (story) {
        store.stories[exportedName] = story;
      }
    },
    ExportNamedDeclaration: (path: any) => {
      const { declaration } = path.node;
      if (declaration) {
        const { declarations } = declaration;
        if (declarations) {
          if (Array.isArray(declarations) && declarations.length > 0) {
            const declaration = declarations[0];
            if (
              declaration.init.type !== 'ObjectExpression' ||
              store.doc?.template
            ) {
              const story = extractFunction(
                path as NodePath,
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
        } else {
          if (declaration.type === 'FunctionDeclaration') {
            const story = extractFunction(
              path as NodePath,
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
      } else if (Array.isArray(path.node.specifiers)) {
        path.node.specifiers.forEach((item: any) => {
          if (
            item.type === 'ExportSpecifier' &&
            item.exported?.type === 'Identifier'
          ) {
            const localName = item.local.name;
            const exportedName = item.exported.name;
            const story = locals[localName];
            if (story) {
              store.stories[exportedName] = story;
            }
          }
        });
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
