import * as ts from 'typescript';
import { TypeResolver, getSymbolType } from '../utils';
import { isObjectTypeDeclaration } from '../ts-utils';

const getIdentifierParent = (
  node: ts.Node,
): ts.ImportSpecifier | ts.ImportClause | ts.ModuleDeclaration | undefined => {
  let parent = node;
  while (parent.parent) {
    if (
      'name' in parent &&
      (ts.isImportSpecifier(parent) ||
        ts.isImportClause(parent) ||
        ts.isModuleDeclaration(parent))
    ) {
      return parent;
    }
    parent = parent.parent;
  }
  return undefined;
};

export interface ReactResolveOptions {
  componentNames?: string[];
  reactNames?: string[];
}
export const typeResolver: TypeResolver = (
  { symbolType, declaration, checker },
  reactOptions?: ReactResolveOptions,
) => {
  const options: Required<ReactResolveOptions> = {
    componentNames: ['Component'],
    reactNames: ['React'],
    ...reactOptions,
  };
  if ((symbolType.flags & ts.TypeFlags.Object) === ts.TypeFlags.Object) {
    if (isObjectTypeDeclaration(declaration)) {
      const heritage = declaration.heritageClauses;
      if (heritage?.length) {
        const extendsFrom = heritage[0];
        const reactComponent = extendsFrom.types.find(t => {
          const reactSymbol = checker.getSymbolAtLocation(t.expression);
          if (reactSymbol) {
            const reactDeclaration =
              reactSymbol.valueDeclaration || reactSymbol.declarations?.[0];
            if (reactDeclaration) {
              const component = getIdentifierParent(reactDeclaration);
              if (
                component &&
                component.parent &&
                component.name &&
                (options.componentNames.includes(component.name.getText()) ||
                  options.reactNames.includes(component.name.getText()))
              ) {
                return true;
              }
            }
          }
          return false;
        });
        if (reactComponent) {
          const signatures = symbolType.getConstructSignatures();
          if (signatures.length > 0 && signatures[0].parameters.length) {
            const props = signatures[0].parameters[0];
            const propsType = getSymbolType(checker, props) || symbolType;
            if (propsType.isUnionOrIntersection()) {
              return propsType.types[0];
            }
            return propsType;
          }
        }
      }
    }
  }
  return symbolType;
};
