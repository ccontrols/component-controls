import * as parser from '@babel/parser';
import { ImportTypes } from '@component-controls/core';
import traverse, { TraverseOptions } from '@babel/traverse';

export const traverseImports = (results: ImportTypes): TraverseOptions => {
  return {
    ImportDeclaration: (path: any) => {
      const node = path.node;
      node.specifiers.forEach((specifier: any) => {
        let importedName;
        switch (specifier.type) {
          case 'ImportDefaultSpecifier':
            importedName = 'default';
            break;
          case 'ImportNamespaceSpecifier':
            importedName = 'namespace';
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
  };
};

export const extractImports = (
  source: string,
  parserOptions?: parser.ParserOptions,
): ImportTypes => {
  const results: ImportTypes = {};
  const ast = parser.parse(source, parserOptions);

  traverse(ast as any, traverseImports(results));
  return results;
};
