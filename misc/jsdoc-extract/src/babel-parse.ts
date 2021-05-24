import fs from 'fs';

import {
  ExportNamedDeclaration,
  TSInterfaceDeclaration,
  VariableDeclarator,
  TSTypeAnnotation,
} from '@babel/types';
import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import {
  jsdocCommentToMember,
  ParseResult,
  JSDocParameter,
} from './jsdoc-md/jsdocCommentToMember';
import { parseTypeNode, TypescriptType } from './ts-type-parse';
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
): Record<string, Partial<ParseResult>> => {
  const source: string = fs.readFileSync(filePath, 'utf8');
  const result: ReturnType<typeof extract> = {};
  const ast = parser.parse(source, options);
  traverse(ast, {
    TSInterfaceDeclaration: (path: any) => {
      const node = path.node as TSInterfaceDeclaration;
      const name = node.id.name;
      const props = node.body.body;
      console.log(name, props);
    },
    ExportNamedDeclaration: (path: any) => {
      const node = path.node as ExportNamedDeclaration;
      const comments = node.leadingComments
        ? node.leadingComments
            .filter(comment => comment.type === 'CommentBlock')
            .map(comment => comment.value)
            .join('/n')
        : undefined;

      const declarator: VariableDeclarator = (node as any).declaration
        .declarations?.length
        ? (node as any).declaration.declarations[0]
        : node.declaration;
      const id = declarator?.id ? (declarator.id as any).name : undefined;
      if (id) {
        if (comments) {
          result[id] = {};
          const parsed = jsdocCommentToMember(comments);
          if (parsed) {
            result[id] = parsed;
          }
        }
        const init = declarator?.init;
        if (init) {
          if (init.type === 'ArrowFunctionExpression') {
            const returns = parseTypeNode(init.returnType as TSTypeAnnotation);
            if (returns) {
              result[id].returns = { ...result[id].returns, ...returns };
            }
            const params = init.params
              .map(param => parseTypeNode(param as any))
              .filter(p => p);
            if (params) {
              const parameters = result[id].parameters || [];
              params.forEach(param => {
                const existingIdx = parameters.findIndex(
                  p => p.name === (param as TypescriptType).name,
                );
                if (existingIdx >= 0) {
                  parameters[existingIdx] = {
                    ...parameters[existingIdx],
                    ...param,
                  };
                } else {
                  parameters.push(param as JSDocParameter);
                }
                result[id].parameters = parameters;
              });
            }
          }
        } else if ((declarator as any)?.body.body) {
        }
      }
    },
  });
  return result;
};
