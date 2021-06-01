import * as ts from 'typescript';
import { JSImport } from './utils';

export const parsImports = (node: ts.ImportDeclaration): JSImport => {
  const name =
    node.importClause?.namedBindings &&
    ts.isNamespaceImport(node.importClause.namedBindings)
      ? node.importClause.namedBindings.name.text
      : node.importClause?.name?.text;
  const result: JSImport = {
    module: node.moduleSpecifier.getText().replace(/['"]+/g, ''),
    name,
  };

  if (
    node.importClause?.namedBindings &&
    ts.isNamedImports(node.importClause.namedBindings)
  ) {
    result.namedImports = node.importClause.namedBindings.elements.reduce(
      (acc, b) => ({
        ...acc,
        [b.name.text]: b.propertyName?.text || b.name.text,
      }),
      {},
    );
  }
  return result;
};
