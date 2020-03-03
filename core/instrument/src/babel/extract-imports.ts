import * as parser from '@babel/parser';
import traverse from '@babel/traverse';

export interface ImportType {
  name: string;
  importedName: 'default' | 'namespace' | string;
}

export interface ImportTypes {
  [key: string]: ImportType[];
}

export const traverseImports = (results: ImportTypes) => {
  return {
    ImportDeclaration: (path: any) => {
      const node = path.node;
      const imports: ImportType[] = node.specifiers.map((specifier: any) => {
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
        return {
          name: specifier.local.name,
          importedName,
        };
      });
      if (Array.isArray(results[node.source.value])) {
        results[node.source.value] = [
          ...results[node.source.value],
          ...imports,
        ];
      } else {
        results[node.source.value] = imports;
      }
    },
  };
};

export const extractImports = (
  source: string,
  parserOptions?: parser.ParserOptions,
) => {
  const results: ImportTypes = {};
  const ast = parser.parse(source, parserOptions);

  traverse(ast, traverseImports(results));
  return results;
};
