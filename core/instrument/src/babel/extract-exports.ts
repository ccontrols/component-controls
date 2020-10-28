import * as parser from '@babel/parser';
import traverse, { TraverseOptions } from '@babel/traverse';
import { CodeLocation } from '@component-controls/core';
import { sourceLocation } from '../misc/source-location';

export interface ExportType {
  name: string;
  internalName: string;
  loc?: CodeLocation;
  /**
   * in case of export { Button } from './button-named-export';
   * specifies the import from statememnt
   */
  from?: string;
  node?: any;
  path?: any;
}

export const EXPORT_ALL = '*';
export const EXPORT_DEFAULT = 'default';

export interface NamedExportTypes {
  [key: string]: ExportType;
}
export interface ExportTypes {
  default?: ExportType;
  named: NamedExportTypes;
}
export const traverseExports = (results: ExportTypes): TraverseOptions => {
  const globals: NamedExportTypes = {};
  const localExports: NamedExportTypes = {};

  const extractExportVariable = (
    path: any,
    declaration: any,
  ): ExportType | undefined => {
    if (declaration.id && declaration.id.name) {
      const name = declaration.id.name;
      const exportType: ExportType = {
        node: declaration,
        path,
        name,
        internalName: name,
      };
      if (declaration.init) {
        exportType.loc = sourceLocation(
          declaration.init.body &&
            declaration.init.type !== 'ArrowFunctionExpression'
            ? declaration.init.body.loc
            : declaration.init.loc,
        );
      }

      return exportType;
    }
    return undefined;
  };
  return {
    ExportDefaultDeclaration: (path: any) => {
      const { declaration } = path.node;
      const internalName = declaration
        ? declaration.id
          ? declaration.id.name
          : declaration.name || EXPORT_DEFAULT
        : EXPORT_DEFAULT;
      const localExport = localExports[internalName];
      results.default = {
        name: EXPORT_DEFAULT,
        internalName,
        loc: localExport ? localExport.loc : sourceLocation(path.node.loc),
      };
    },
    ImportDeclaration: (path: any) => {
      const { specifiers, source } = path.node;
      if (Array.isArray(specifiers)) {
        specifiers.forEach(specifier => {
          localExports[specifier.local.name] = {
            name: specifier.local.name,
            internalName: specifier.imported
              ? specifier.imported.name
              : specifier.local.name,
            from: source.value,
            loc: sourceLocation(specifier.loc),
          };
        });
      }
    },
    VariableDeclaration: (path: any) => {
      const { declarations } = path.node;
      if (Array.isArray(declarations)) {
        declarations.forEach(declaration => {
          const name = declaration.id.name;
          //check if it was a named export
          if (!results.named[name]) {
            const namedExport = extractExportVariable(path, declaration);

            if (namedExport && namedExport.name) {
              localExports[namedExport.name] = namedExport;
            }
          }
        });
      }
    },
    ClassDeclaration: (path: any) => {
      const node = path.node.declaration || path.node;
      if (node.id) {
        const name = node.id.name;
        localExports[name] = {
          name,
          internalName: name,
          loc: sourceLocation(node.body ? node.body.loc : node.loc),
        };
      }
    },
    AssignmentExpression: (path: any) => {
      //exports.Button = Buttton;
      const { node } = path;
      if (
        node.left &&
        node.right &&
        node.left.object &&
        node.left.object.name === 'exports'
      ) {
        const exportedName = node.left.property.name;

        const localName = node.right.name || node.right.object?.name;
        const namedExport = localExports[localName];
        if (namedExport) {
          namedExport.internalName = namedExport.name;
          namedExport.name = exportedName;
          results.named[exportedName] = namedExport;
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
            const namedExport = extractExportVariable(path, declaration);
            if (namedExport) {
              const name = namedExport.name || '';
              const global = globals[name];
              if (global) {
                namedExport.internalName = global.name;
                namedExport.name = global.name;
                namedExport.loc = global.loc;
                namedExport.node = global.node;
              }
              results.named[name] = namedExport;
            }
          });
        } else {
          const name = declaration.id.name;
          results.named[name] = {
            name,
            internalName: name,
            loc: sourceLocation(
              declaration.body ? declaration.body.loc : path.node.loc,
            ),
          };
        }
      } else if (specifiers) {
        specifiers.forEach((specifier: any) => {
          const internalName = specifier.local
            ? specifier.local.name
            : specifier.exported.name;
          const global = globals[internalName];
          results.named[specifier.exported.name] = {
            name: specifier.exported.name,
            internalName: global ? global.internalName : internalName,
            loc: sourceLocation(specifier.exported.loc),
            from: source ? source.value : global ? global.from : undefined,
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
): ExportTypes => {
  const results: ExportTypes = {
    named: {},
  };
  const ast = parser.parse(source, parserOptions);

  traverse(ast as any, traverseExports(results));
  return results;
};
