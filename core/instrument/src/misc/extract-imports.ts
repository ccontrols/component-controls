import * as ts from 'typescript';
import path from 'path';
import { Imports, isLocalImport } from '@component-controls/core';
import { getSymbolDeclaration } from '@structured-types/api';
import { ImportType, EXPORT_DEFAULT } from '@component-controls/follow-imports';
import { componentKey } from '../misc/hashStore';

export const getModuleImports = (imports: ImportType[]) => {
  return (module: ts.Symbol, checker: ts.TypeChecker): void => {
    const declaration = getSymbolDeclaration(module);

    if (declaration) {
      ts.forEachChild(declaration, (node: ts.Node) => {
        if (ts.isImportDeclaration(node)) {
          if (node.importClause) {
            let from =
              'text' in node.moduleSpecifier
                ? (node.moduleSpecifier as any).text
                : node.moduleSpecifier.getText();
            if (isLocalImport(from)) {
              const ext = path.extname(from);
              if (ext.length <= 0) {
                const symbol = checker.getSymbolAtLocation(
                  node.moduleSpecifier,
                );
                const declaration = getSymbolDeclaration(symbol);
                if (
                  declaration &&
                  ts.isSourceFile(declaration) &&
                  !declaration.fileName.includes('node_modules')
                ) {
                  const ext = path.extname(declaration.fileName);
                  if (ext.length) {
                    from = `${from}${ext}`;
                  }
                }
              }
            }
            node.importClause.namedBindings?.forEachChild(e => {
              if (ts.isImportSpecifier(e)) {
                imports.push({
                  name: e.name.text,
                  from,
                  importedName: e.propertyName?.text || e.name.text,
                });
              } else if (ts.isIdentifier(e)) {
                imports.push({
                  name: e.text,
                  from,
                  importedName: EXPORT_DEFAULT,
                });
              }
            });
            if (node.importClause.name) {
              imports.push({
                importedName: EXPORT_DEFAULT,
                from,
                name: node.importClause.name.text,
              });
            }
          }
        } else if (ts.isVariableStatement(node)) {
          const declarations = node.declarationList;
          declarations.forEachChild(d => {
            if (
              ts.isVariableDeclaration(d) &&
              d.initializer &&
              ts.isCallExpression(d.initializer) &&
              ts.isIdentifier(d.initializer.expression) &&
              d.initializer.expression.text === 'require'
            ) {
              if (d.initializer.arguments.length) {
                const from = d.initializer.arguments[0];
                if (ts.isStringLiteral(from)) {
                  if (ts.isIdentifier(d.name)) {
                    imports.push({
                      name: d.name.text,
                      from: from.text,
                      importedName: EXPORT_DEFAULT,
                    });
                  } else if (ts.isBindingName(d.name)) {
                    d.name.elements.forEach(e => {
                      if (ts.isBindingElement(e)) {
                        const name = e.name;
                        if (ts.isIdentifier(name)) {
                          imports.push({
                            name: name.text,
                            from: from.text,
                            importedName:
                              e.propertyName && ts.isIdentifier(e.propertyName)
                                ? e.propertyName.text
                                : name.text,
                          });
                        }
                      }
                    });
                  }
                }
              }
            }
          });
        }
      });
    }
  };
};

export const getComponentImports = (
  imports: ImportType[],
): {
  externalDependencies: Imports;
  localDependencies: Imports;
} => {
  const allImports = imports.reduce(
    (acc: Imports, { name, from, importedName }) => {
      let importKey = undefined;
      if (isLocalImport(from)) {
        importKey = componentKey(from, importedName);
      }

      if (acc[from]) {
        return {
          ...acc,
          [from]: [
            ...acc[from],
            importKey
              ? { name, importedName, componentKey: importKey }
              : { name, importedName },
          ],
        };
      }
      return {
        ...acc,
        [from]: [
          importKey
            ? { name, importedName, componentKey: importKey }
            : { name, importedName },
        ],
      };
    },
    {},
  );

  return {
    externalDependencies: Object.keys(allImports)
      .filter(key => !isLocalImport(key))
      .reduce(
        (acc, key) => ({ ...acc, [key]: (allImports as Imports)[key] }),
        {},
      ),
    localDependencies: Object.keys(allImports)
      .filter(key => isLocalImport(key))
      .reduce((acc, key) => {
        return { ...acc, [key]: (allImports as Imports)[key] };
      }, {}),
  };
};
