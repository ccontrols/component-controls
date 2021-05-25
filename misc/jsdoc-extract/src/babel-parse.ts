import fs from 'fs';
import {
  ArrowFunctionExpression,
  TSInterfaceDeclaration,
  VariableDeclarator,
  TSTypeAnnotation,
  ClassDeclaration,
  CallExpression,
  Identifier,
  Node,
} from '@babel/types';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { parseTypeNode } from './ts-type-parse';
import { mergeJSDocComments } from './jsdoc-parse';
import { JSDocType } from './utils';
export const extract = (
  filePath: string,
  options: parser.ParserOptions = {
    sourceType: 'module',
    plugins: [
      'jsx',
      'typescript',
      'classProperties',
      'dynamicImport',
      'objectRestSpread',
    ],
  },
): Record<string, Partial<JSDocType>> => {
  const source: string = fs.readFileSync(filePath, 'utf8');
  const results: Record<string, JSDocType> = {};
  const ast = parser.parse(source, options);
  traverse(ast, {
    TSInterfaceDeclaration: (path: any) => {
      const node: TSInterfaceDeclaration = path.node;
      const name = node.id.name;
      const props = node.body.body;
      const result: JSDocType = {
        type: 'interface',
        properties: props.map(prop =>
          parseTypeNode(prop as Node),
        ) as JSDocType[],
      };
      results[name] = mergeJSDocComments(path.parent, result);
    },
    ArrowFunctionExpression: (path: any) => {
      const node = path.node as ArrowFunctionExpression;
      if (path.parent.type === 'VariableDeclarator') {
        const parent = path.parent as VariableDeclarator;
        const container = path.find(
          (path: any) => path.node.type === 'ExportNamedDeclaration',
        );
        const id = (parent.id as Identifier).name;
        const result: JSDocType = {
          type: 'function',
          parameters: node.params
            .map(param => parseTypeNode(param as any))
            .filter(p => p) as JSDocType[],
        };

        const returns = parseTypeNode(node.returnType as TSTypeAnnotation);
        if (returns) {
          result.returns = { ...result.returns, ...returns };
        }
        if (container) {
          results[id] = mergeJSDocComments(container.node, result);
        } else {
          results[id] = result;
        }
      }
    },
    CallExpression: (path: any) => {
      const node = path.node as CallExpression;
      const id = path.parent.id.name;
      const result: JSDocType = {
        type: 'function',
        parameters: node.arguments
          .map(arg => parseTypeNode(arg))
          .filter(p => p) as JSDocType[],
      };
      results[id] = mergeJSDocComments(node, result);
    },

    ClassDeclaration: (path: any) => {
      const node = path.node as ClassDeclaration;
      const id = node.id.name;
      const superParams = node.superTypeParameters;
      const result: JSDocType = {
        type: 'class',
        parameters: superParams?.params
          .map((param: Node) => parseTypeNode(param as TSTypeAnnotation))
          .filter(p => p) as JSDocType[],
      };
      results[id] = mergeJSDocComments(path.parent, result);
    },
  });
  return results;
};
