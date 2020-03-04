import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { CodeLocation } from '@component-controls/specification';
import { sourceLocation } from './utils';

export interface ExportType {
  name: string;
  internalName?: string;
  loc: CodeLocation;
  /**
   * in case of export { Button } from './button-named-export';
   * specifies the import from statememnt
   */
  from?: string;
}

export const EXPORT_ALL = '*';

export interface NamedExportTypes {
  [key: string]: ExportType;
}
export interface ExportTypes {
  default?: ExportType;
  named: NamedExportTypes;
}
export const traverseExports = (results: ExportTypes) => {
  const globals: NamedExportTypes = {};
  const localExports: NamedExportTypes = {};

  const extractArrowFunction = (declaration: any): ExportType | undefined => {
    if (
      declaration.init &&
      declaration.init.type === 'ArrowFunctionExpression'
    ) {
      const name = declaration.id.name;
      const exportType: ExportType = {
        loc: sourceLocation(declaration.init.body.loc),
        name,
        internalName: name,
      };
      return exportType;
    }
    return undefined;
  };
  return {
    ExportDefaultDeclaration: (path: any) => {
      results.default = {
        name: 'default',
        loc: sourceLocation(path.node.loc),
      };
    },
    VariableDeclaration: (path: any) => {
      const { declarations } = path.node;
      if (Array.isArray(declarations) && declarations.length > 0) {
        const declaration = declarations[0];
        if (declaration) {
          const name = declaration.id.name;
          //check if it was a named export
          if (!results.named[name]) {
            const namedExport = extractArrowFunction(declaration);
            if (namedExport && namedExport.name) {
              localExports[namedExport.name] = namedExport;
            }
          }
        }
      }
    },
    ExportSpecifier: (path: any) => {
      const { node } = path;
      const localName = node.local.name;
      const exportedName = node.exported.name;
      const namedExport = localExports[localName];

      if (namedExport) {
        namedExport.internalName = namedExport.name;
        namedExport.name = exportedName;
        const global = globals[localName];
        if (global) {
          namedExport.loc = global.loc;
        }
        results.named[exportedName] = namedExport;
      }
    },
    ExportNamedDeclaration: (path: any) => {
      const { declaration, specifiers, source } = path.node;
      if (declaration) {
        const { declarations } = declaration;

        if (Array.isArray(declarations)) {
          declarations.forEach(declaration => {
            const namedExport = extractArrowFunction(declaration);
            if (namedExport) {
              const name = namedExport.name || '';
              const global = globals[name];
              if (global) {
                namedExport.internalName = global.name;
                namedExport.name = global.name;
                namedExport.loc = global.loc;
              }
              results.named[name] = namedExport;
            }
          });
        }
      } else if (specifiers) {
        specifiers.forEach((specifier: any) => {
          results.named[specifier.exported.name] = {
            name: specifier.exported.name,
            internalName: specifier.local
              ? specifier.local.name
              : specifier.exported.name,
            loc: sourceLocation(specifier.exported.loc),
            from: source ? source.value : undefined,
          };
        });
      }
    },
    ExportAllDeclaration: (path: any) => {
      const node = path.node;
      const { source } = node;
      if (source) {
        results.named[source.value] = {
          name: EXPORT_ALL,
          internalName: EXPORT_ALL,
          loc: sourceLocation(source.loc),
          from: source.value,
        };
      }
    },
  };
};

export const extractExports = (
  source: string,
  parserOptions?: parser.ParserOptions,
) => {
  const results: ExportTypes = {
    named: {},
  };
  const ast = parser.parse(source, parserOptions);

  traverse(ast, traverseExports(results));
  return results;
};
