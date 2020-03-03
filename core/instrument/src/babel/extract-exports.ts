import * as parser from '@babel/parser';
import traverse from '@babel/traverse';
import { CodeLocation } from '@component-controls/specification';
import { sourceLocation } from './utils';

export interface ExportType {
  path: any;
  node: any;
  name: string;
  internalName?: string;
  loc: CodeLocation;
  type: 'function' | 'indentifier';
}

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

  const extractArrowFunction = (
    path: any,
    declaration: any,
  ): ExportType | undefined => {
    if (
      declaration.init &&
      declaration.init.type === 'ArrowFunctionExpression'
    ) {
      const name = declaration.id.name;
      const exportType: ExportType = {
        loc: sourceLocation(declaration.init.body.loc),
        name,
        internalName: name,
        path,
        node: path.node,
        type: 'function',
      };
      return exportType;
    }
    return undefined;
  };
  return {
    ExportDefaultDeclaration: (path: any) => {
      results.default = {
        name: 'default',
        path,
        node: path.node.declaration,
        loc: sourceLocation(path.node.loc),
        type: 'indentifier',
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
            const namedExport = extractArrowFunction(path, declaration);
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
          namedExport.path = global.path;
          namedExport.node = global.node;
          namedExport.loc = global.loc;
        }
        results.named[exportedName] = namedExport;
      }
    },
    ExportNamedDeclaration: (path: any) => {
      const { declaration } = path.node;
      if (declaration) {
        const { declarations } = declaration;

        if (Array.isArray(declarations)) {
          declarations.forEach(declaration => {
            const namedExport = extractArrowFunction(path, declaration);
            if (namedExport) {
              const name = namedExport.name || '';
              const global = globals[name];
              if (global) {
                namedExport.internalName = global.name;
                namedExport.name = global.name;
                namedExport.path = global.path;
                namedExport.node = global.node;
                namedExport.loc = global.loc;
              }
              results.named[name] = namedExport;
            }
          });
        }
      }
    },
  };
};

const cleanExportType = (exportType?: ExportType) => {
  return exportType
    ? {
        name: exportType.name,
        internalName: exportType.internalName,
        loc: exportType.loc,
      }
    : undefined;
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
  return {
    default: cleanExportType(results.default),
    named: Object.keys(results.named).map(key =>
      cleanExportType(results.named[key]),
    ),
  };
};
