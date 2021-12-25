import * as parser from '@babel/parser';
import {
  Identifier,
  VariableDeclaration,
  ExportDefaultDeclaration,
  ClassDeclaration,
  AssignmentExpression,
  ObjectExpression,
  MemberExpression,
  ExportSpecifier,
  ExportNamedDeclaration,
  ExportAllDeclaration,
  TSExportAssignment,
  TSTypeAliasDeclaration,
  TSInterfaceDeclaration,
  TSModuleDeclaration,
  ObjectProperty,
} from '@babel/types';
import traverse, { NodePath } from '@babel/traverse';
import { sourceLocation } from './source-location';
import { parseFile } from './ast_store';
import { extractImports } from './extract-imports';
import {
  ExportTypes,
  ExportType,
  NamedExportTypes,
  EXPORT_DEFAULT,
  EXPORT_ALL,
  defaultParserOptions,
} from './consts';

export const extractExports = (
  fileName: string,
  options: parser.ParserOptions = defaultParserOptions,
): ExportTypes => {
  const cache = parseFile(fileName, options);
  if (!cache.exports) {
    const results: ExportTypes = { named: {}, default: {} };
    const imports = extractImports(fileName);
    cache.imports = imports;
    cache.exports = results;

    const globals: NamedExportTypes = {};

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
          if (
            declaration.init.type === 'Identifier' &&
            imports[declaration.init.name]
          ) {
            const imported = imports[declaration.init.name];
            exportType.from = imported.from;
            exportType.internalName = imported.importedName;
          }
        }

        return exportType;
      }
      return undefined;
    };
    const localExports: NamedExportTypes = {};
    traverse(cache.ast, {
      VariableDeclaration: (path: NodePath<VariableDeclaration>) => {
        const { declarations } = path.node;
        if (Array.isArray(declarations)) {
          declarations.forEach(declaration => {
            const name = (declaration.id as Identifier).name;
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
      ClassDeclaration: (path: NodePath<ClassDeclaration>) => {
        const node = path.node;

        if (node.id) {
          const name = node.id.name;
          localExports[name] = {
            name,
            internalName: name,
            loc: sourceLocation(node.body ? node.body.loc : node.loc),
          };
        }
      },
      TSTypeAliasDeclaration: (path: NodePath<TSTypeAliasDeclaration>) => {
        const node = path.node;
        if (node.id) {
          const parent = path.context.parentPath.container;
          const name = node.id.name;
          let parentName: string | undefined = undefined;
          if ((parent as TSModuleDeclaration).id) {
            parentName = ((parent as TSModuleDeclaration).id as Identifier)
              .name;
          }
          if (!parentName) {
            localExports[name] = {
              name,
              internalName: name,
              loc: sourceLocation(node.loc),
            };
          }
        }
      },
      TSInterfaceDeclaration: (path: NodePath<TSInterfaceDeclaration>) => {
        const node = path.node;
        if (node.id) {
          const parent = path.context.parentPath.container;
          const name = node.id.name;
          let parentName: string | undefined = undefined;
          if ((parent as TSModuleDeclaration).id) {
            parentName = ((parent as TSModuleDeclaration).id as Identifier)
              .name;
          }
          if (!parentName) {
            localExports[name] = {
              name,
              internalName: name,
              loc: sourceLocation(node.body ? node.body.loc : node.loc),
            };
          }
        }
      },
    });
    traverse(cache.ast, {
      ExportDefaultDeclaration: (path: NodePath<ExportDefaultDeclaration>) => {
        const id = (path.node.declaration as ClassDeclaration).id as Identifier;
        const internalName = path.node.declaration
          ? id
            ? id.name
            : (path.node.declaration as Identifier).name || EXPORT_DEFAULT
          : EXPORT_DEFAULT;
        const localExport = localExports[internalName] || imports[internalName];
        results.default[EXPORT_DEFAULT] = {
          name: EXPORT_DEFAULT,
          internalName,
          loc: localExport ? localExport.loc : sourceLocation(path.node.loc),
        };
      },
      TSExportAssignment: (path: NodePath<TSExportAssignment>) => {
        const { node } = path;
        const name = (node.expression as Identifier)?.name;
        const localExport = localExports[name] || imports[name];
        results.default[EXPORT_DEFAULT] = {
          name: EXPORT_DEFAULT,
          internalName: name,
          loc: localExport ? localExport.loc : sourceLocation(path.node.loc),
        };
      },
      TSTypeAliasDeclaration: (path: NodePath<TSTypeAliasDeclaration>) => {
        const node = path.node;
        if (node.id) {
          const parent = path.context.parentPath.container;
          const name = node.id.name;
          let parentName: string | undefined = undefined;
          if ((parent as TSModuleDeclaration).id) {
            parentName = ((parent as TSModuleDeclaration).id as Identifier)
              .name;
          }
          if (parentName) {
            if (results.default[EXPORT_DEFAULT]?.internalName === parentName) {
              results.default[name] = {
                name,
                internalName: name,
                loc: sourceLocation(node.loc),
              };
            }
          }
        }
      },
      TSInterfaceDeclaration: (path: NodePath<TSInterfaceDeclaration>) => {
        const node = path.node;
        if (node.id) {
          const parent = path.context.parentPath.container;
          const name = node.id.name;
          let parentName: string | undefined = undefined;
          if ((parent as TSModuleDeclaration).id) {
            parentName = ((parent as TSModuleDeclaration).id as Identifier)
              .name;
          }
          if (parentName) {
            if (results.default[EXPORT_DEFAULT]?.internalName === parentName) {
              results.default[name] = {
                name,
                internalName: name,
                loc: sourceLocation(node.body ? node.body.loc : node.loc),
              };
            }
          }
        }
      },
      AssignmentExpression: (path: NodePath<AssignmentExpression>) => {
        const { node } = path;
        const leftExpression = node.left as MemberExpression;
        const left = leftExpression?.object as Identifier;
        const rightExpression = node.right as
          | MemberExpression
          | Identifier
          | ObjectExpression;

        if (
          left &&
          rightExpression &&
          (left.name === 'exports' ||
            (left.name === 'module' &&
              (leftExpression.property as Identifier)?.name === 'exports'))
        ) {
          const exportedName =
            left.name === 'exports'
              ? (leftExpression.property as Identifier)?.name
              : EXPORT_DEFAULT;

          if ((rightExpression as ObjectExpression).properties) {
            (rightExpression as ObjectExpression).properties.reduce(
              (acc, prop) => {
                const localName: string = (
                  (prop as ObjectProperty).value as Identifier
                )?.name;
                const namedExport =
                  localExports[localName] || imports[localName];
                if (namedExport) {
                  acc[namedExport.name] = {
                    ...namedExport,
                    internalName: namedExport.name,
                    name: exportedName,
                  };
                }
                return acc;
              },
              exportedName === EXPORT_DEFAULT ? results.default : results.named,
            );
          } else {
            const localName =
              (rightExpression as Identifier).name ||
              ((rightExpression as MemberExpression).object as Identifier)
                ?.name;
            const namedExport = localExports[localName] || imports[localName];

            if (namedExport) {
              namedExport.internalName = namedExport.name;
              namedExport.name = exportedName;
              if (exportedName === EXPORT_DEFAULT) {
                results.default[EXPORT_DEFAULT] = namedExport;
              } else {
                results.named[namedExport.name] = namedExport;
              }
              results.named[exportedName] = namedExport;
            }
          }
        }
      },
      ExportSpecifier: (path: NodePath<ExportSpecifier>) => {
        const node = path.node;
        const localName = node.local.name;
        const exported = node.exported as Identifier;
        const exportedName = exported.name;
        const namedExport = localExports[localName] || imports[localName];
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
      ExportNamedDeclaration: (path: NodePath<ExportNamedDeclaration>) => {
        const node = path.node;
        if (node.declaration) {
          const declaration = node.declaration;
          const { declarations } = declaration as VariableDeclaration;
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
            const declaration = node.declaration as ClassDeclaration;
            const name = declaration.id.name;
            results.named[name] = {
              name,
              internalName: name,
              loc: sourceLocation(
                declaration.body ? declaration.body.loc : path.node.loc,
              ),
            };
          }
        } else if (node.specifiers) {
          const specifiers = node.specifiers;
          specifiers.forEach((specifier: any) => {
            const internalName = specifier.local
              ? specifier.local.name
              : specifier.exported.name;
            const global = globals[internalName];
            results.named[specifier.exported.name] = {
              name: specifier.exported.name,
              internalName: global ? global.internalName : internalName,
              loc: sourceLocation(specifier.exported.loc),
              from: node.source
                ? node.source.value
                : global
                ? global.from
                : undefined,
            };
          });
        }
      },
      ExportAllDeclaration: (path: NodePath<ExportAllDeclaration>) => {
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
    });
  }
  return cache.exports;
};
