import * as parser from '@babel/parser';
import {
  ImportDeclaration,
  Identifier,
  VariableDeclarator,
} from '@babel/types';
import traverse, { TraverseOptions, NodePath } from '@babel/traverse';
import { parseFile } from './ast_store';
import { ImportTypes, EXPORT_DEFAULT, IMPORT_NAMESPACE } from './consts';

export const parseImports = (
  fileName: string,
  options?: parser.ParserOptions,
): ImportTypes => {
  const cache = parseFile(fileName, options);
  if (!cache.imports) {
    cache.imports = {};
    traverse(cache.ast, traverseImports(cache.imports));
  }
  return cache.imports;
};
export const traverseImports = (results: ImportTypes): TraverseOptions => {
  return {
    ImportDeclaration: (path: NodePath<ImportDeclaration>) => {
      const node = path.node;
      node.specifiers.forEach((specifier: any) => {
        let importedName;
        switch (specifier.type) {
          case 'ImportDefaultSpecifier':
            importedName = EXPORT_DEFAULT;
            break;

          case 'ImportNamespaceSpecifier':
            importedName = IMPORT_NAMESPACE;
            break;

          default:
            importedName = specifier.imported
              ? specifier.imported.name
              : specifier.local.name;
        }
        results[specifier.local.name] = {
          name: specifier.local.name,
          importedName,
          from: node.source.value,
        };
      });
    },
    VariableDeclarator: (path: NodePath<VariableDeclarator>) => {
      const node = path.node;
      if (
        node.init &&
        node.init.type === 'CallExpression' &&
        (node.init.callee as Identifier).name === 'require'
      ) {
        node.init.arguments.forEach(arg => {
          if (arg.type === 'StringLiteral') {
            if (node.id.type === 'ObjectPattern') {
              node.id.properties.forEach(prop => {
                if (prop.type === 'ObjectProperty') {
                  const name = (prop.key as Identifier).name;
                  results[name] = {
                    name,
                    importedName: (prop.value as Identifier).name,
                    from: arg.value,
                  };
                }
              });
            } else {
              const name = (node.id as Identifier).name;
              results[name] = {
                name,
                importedName: EXPORT_DEFAULT,
                from: arg.value,
              };
            }
          }
        });
      }
    },
  };
};

export const extractImports = (
  fileName: string,
  parserOptions?: parser.ParserOptions,
): ImportTypes => {
  const results: ImportTypes = {};
  const { ast } = parseFile(fileName, parserOptions);

  traverse(ast, traverseImports(results));
  return results;
};
