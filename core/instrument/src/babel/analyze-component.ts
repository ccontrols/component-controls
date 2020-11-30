import path from 'path';
import traverse, { TraverseOptions } from '@babel/traverse';
import {
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
} from '@babel/types';
import * as resolve from 'resolve';
import {
  Component,
  JSXNode,
  JSXTree,
  ImportTypes,
  isLocalImport,
} from '@component-controls/core';
import { collectAttributes } from './extract-attributes';
import { componentKey } from '../misc/hashStore';
import { followImports } from './follow-imports';
import { parseFile, parseImports } from '../misc/ast_store';
import { InstrumentOptions } from '../types';

type JSXLinkedNode = JSXNode & { parent?: JSXNode };
type JSXLinkedTree = JSXLinkedNode[];

const traverseJSX = (
  jsx: JSXLinkedTree,
  imports: ImportTypes,
  filePath: string,
  options?: InstrumentOptions,
): TraverseOptions => {
  let current: JSXLinkedNode = { children: jsx };
  return {
    JSXElement: {
      enter({ node }) {
        const nameNode = node.openingElement.name as {
          name: string;
          object: { name: string };
        } & (JSXIdentifier | JSXMemberExpression | JSXNamespacedName);
        const attributes = collectAttributes(node.openingElement);
        const name =
          nameNode.type === 'JSXMemberExpression'
            ? `${nameNode.object.name}.${nameNode.property.name}`
            : nameNode.name;

        const jsxNode: JSXLinkedNode = {
          name,
          parent: current,
          children: [],
          attributes: Object.keys(attributes),
        };
        const nameParts = name.split('.');
        const imported = imports[nameParts[0]];
        if (imported) {
          jsxNode.from = imported.from;
          if (isLocalImport(imported.from)) {
            const fileName = resolve.sync(imported.from, {
              ...options?.resolver,
              basedir: path.dirname(filePath),
            });
            //its a local import
            const followImport = followImports(
              imported.importedName,
              fileName,
              undefined,
              options,
            );
            if (followImport?.filePath) {
              jsxNode.componentKey = componentKey(
                followImport.filePath,
                imported.importedName,
              );
            }
          }
          jsxNode.importedName =
            nameParts.length > 1 && imported.importedName === 'default'
              ? nameParts[1]
              : imported.importedName;
        }
        if (current.children) {
          current.children.push(jsxNode);
        }
        current = jsxNode;
      },

      exit() {
        current = current.parent as JSXLinkedNode;
      },
    },
  };
};
export const analyze_components = (
  component: Component,
  filePath: string,
  options?: InstrumentOptions,
): void => {
  const { parser: parserOptions } = options || {};
  const { ast } = parseFile(filePath, parserOptions);
  const imports = parseImports(filePath);
  const jsx: JSXLinkedTree = [];
  traverse(ast, traverseJSX(jsx, imports, filePath, options));
  const mapJSXTree = (input?: JSXLinkedTree): JSXTree => {
    return input
      ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
        input.map(({ parent, children, ...rest }) => ({
          children: mapJSXTree(children),
          ...rest,
        }))
      : [];
  };
  component.jsx = mapJSXTree(jsx);
};
