import fs from 'fs';
import * as parser from '@babel/parser';
import traverse, { TraverseOptions } from '@babel/traverse';
import { Component, JSXNode, JSXTree } from '@component-controls/core';
import { collectAttributes } from './extract-attributes';
import { InstrumentOptions } from '../types';

type JSXLinkedNode = JSXNode & { parent?: JSXNode };
type JSXLinkedTree = JSXLinkedNode[];

export const traverseJSX = (jsx: JSXLinkedTree): TraverseOptions => {
  let current: JSXLinkedNode = { children: jsx };
  return {
    JSXElement: {
      enter(path) {
        const node = path.node;
        const name = node.openingElement.name as { name: string };
        const attributes = collectAttributes(node.openingElement);
        const jsxNode: JSXLinkedNode = {
          name: name.name,
          parent: current,
          children: [],
          attributes: Object.keys(attributes),
        };
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
  const source = fs.readFileSync(filePath, 'utf8');
  const ast = parser.parse(source, parserOptions);
  const jsx: JSXLinkedTree = [];
  traverse(ast, traverseJSX(jsx));
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
