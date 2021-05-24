import fs from 'fs';

import {
  ExportNamedDeclaration,
  TSInterfaceDeclaration,
  VariableDeclarator,
  TSTypeAnnotation,
  ClassDeclaration,
  Node,
} from '@babel/types';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { jsdocCommentToMember } from './jsdoc-md/jsdocCommentToMember';
import { parseTypeNode } from './ts-type-parse';
import { JSDocType, extractComments } from './utils';
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
  const results: ReturnType<typeof extract> = {};
  const ast = parser.parse(source, options);
  traverse(ast, {
    TSInterfaceDeclaration: (path: any) => {
      const node = path.node as TSInterfaceDeclaration;
      const name = node.id.name;
      const props = node.body.body;
      results[name] = {
        properties: props.map(prop =>
          parseTypeNode(prop as any),
        ) as JSDocType[],
      };
    },
    ExportNamedDeclaration: (path: any) => {
      const node = path.node as ExportNamedDeclaration;
      const comments = extractComments(node);

      const declarator: VariableDeclarator = (node as any).declaration
        .declarations?.length
        ? (node as any).declaration.declarations[0]
        : node.declaration;
      const id = declarator?.id ? (declarator.id as any).name : undefined;
      if (id) {
        if (comments) {
          results[id] = {};
          const parsed = jsdocCommentToMember(comments);
          if (parsed) {
            results[id] = parsed;
          }
        }
        const init = declarator?.init;
        if (init) {
          if (init.type === 'ArrowFunctionExpression') {
            const returns = parseTypeNode(init.returnType as TSTypeAnnotation);
            if (returns) {
              results[id].returns = { ...results[id].returns, ...returns };
            }
            const params = init.params
              .map(param => parseTypeNode(param as any))
              .filter(p => p);
            if (params) {
              const parameters = results[id].parameters || [];
              params.forEach(param => {
                const existingIdx = parameters.findIndex(
                  p => p.name === (param as JSDocType).name,
                );
                if (existingIdx >= 0) {
                  parameters[existingIdx] = {
                    ...parameters[existingIdx],
                    ...param,
                  };
                } else {
                  parameters.push(param as JSDocType);
                }
                results[id].parameters = parameters;
              });
            }
          }
        } else if (
          ((declarator as any) as ClassDeclaration).type === 'ClassDeclaration'
        ) {
          const superParams = ((declarator as any) as ClassDeclaration)
            .superTypeParameters;
          results[id].type = 'class';
          results[id].parameters = superParams?.params
            .map((param: Node) => parseTypeNode(param as TSTypeAnnotation))
            .filter(p => p) as JSDocType[];
        }
      }
    },
  });
  return results;
};
