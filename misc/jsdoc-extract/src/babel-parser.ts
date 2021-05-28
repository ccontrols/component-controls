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
import traverse, { NodePath } from '@babel/traverse';
import { parseTypeNode } from './ts-type-parse';
import { mergeJSDocComments, getNodeComments } from './jsdoc-parse';
import { JSDocType } from './utils';
export const babelParser = (
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
): Record<string, JSDocType> => {
  const source: string = fs.readFileSync(filePath, 'utf8');
  const results: Record<string, JSDocType> = {};
  const ast = parser.parse(source, options);
  traverse(ast, {
    TSInterfaceDeclaration: (path: NodePath<TSInterfaceDeclaration>) => {
      const node: TSInterfaceDeclaration = path.node;
      const name = node.id.name;
      const props = node.body.body;
      const result: JSDocType = {
        type: 'interface',
        properties: props.map(prop =>
          parseTypeNode(filePath, prop as Node),
        ) as JSDocType[],
      };
      results[name] = mergeJSDocComments(result, getNodeComments(path.parent));
    },
    ArrowFunctionExpression: (path: NodePath<ArrowFunctionExpression>) => {
      const node = path.node;
      if (path.parent.type === 'VariableDeclarator') {
        const parent = path.parent as VariableDeclarator;
        const container = path.find(
          (path: any) => path.node.type === 'ExportNamedDeclaration',
        );
        const id = (parent.id as Identifier).name;
        const result: JSDocType = {
          type: 'function',
          parameters: node.params
            .map(param => parseTypeNode(filePath, param as any))
            .filter(p => p) as JSDocType[],
        };

        const returns = parseTypeNode(
          filePath,
          node.returnType as TSTypeAnnotation,
        );
        if (returns) {
          result.returns = { ...result.returns, ...returns };
        }
        // const typeAnnotation = parseTypeNode(filePath, parent.id);
        // console.log(typeAnnotation);
        if (container) {
          results[id] = mergeJSDocComments(
            result,
            getNodeComments(container.node),
          );
        } else {
          results[id] = result;
        }
      }
    },
    CallExpression: (path: NodePath<CallExpression>) => {
      const node = path.node;
      const id = ((path.parent as VariableDeclarator).id as Identifier)?.name;
      const result: JSDocType = {
        type: 'function',
        parameters: node.arguments
          .map(arg => parseTypeNode(filePath, arg))
          .filter(p => p) as JSDocType[],
      };
      results[id] = mergeJSDocComments(result, getNodeComments(node));
    },

    ClassDeclaration: (path: NodePath<ClassDeclaration>) => {
      const node = path.node;
      const id = node.id.name;
      const superParams = node.superTypeParameters;
      const result: JSDocType = {
        type: 'class',
        parameters: superParams?.params
          .map((param: Node) =>
            parseTypeNode(filePath, param as TSTypeAnnotation),
          )
          .filter(p => p) as JSDocType[],
      };
      results[id] = mergeJSDocComments(result, getNodeComments(path.parent));
    },
  });
  return results;
};
