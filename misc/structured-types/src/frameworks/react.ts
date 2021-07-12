import * as ts from 'typescript';
import { TypeResolver, getSymbolType } from '../ts-utils';
import { isObjectTypeDeclaration } from '../ts-utils';

export interface ReactResolveOptions {
  componentNames?: string[];
}
export const typeResolver: TypeResolver = (
  { symbolType, declaration, checker },
  reactOptions?: ReactResolveOptions,
) => {
  const options: Required<ReactResolveOptions> = {
    componentNames: ['Component', 'PureComponent'],
    ...reactOptions,
  };
  if ((symbolType.flags & ts.TypeFlags.Object) === ts.TypeFlags.Object) {
    if (isObjectTypeDeclaration(declaration)) {
      const heritage = declaration.heritageClauses;
      if (heritage?.length) {
        const extendsFrom = heritage[0];
        for (const t of extendsFrom.types) {
          const reactSymbol = checker.getSymbolAtLocation(t.expression);
          if (reactSymbol) {
            const reactSymbolType = getSymbolType(checker, reactSymbol);
            if (reactSymbolType) {
              const reactSymbolTypeSymbol =
                reactSymbolType.symbol || reactSymbolType.aliasSymbol;

              const propsSymbol = reactSymbolTypeSymbol.members?.get(
                'props' as ts.__String,
              );
              let isReact = true;
              if (propsSymbol) {
                const propsDeclaration =
                  propsSymbol.valueDeclaration || propsSymbol.declarations?.[0];
                if (
                  propsDeclaration &&
                  ts.isClassDeclaration(propsDeclaration.parent) &&
                  propsDeclaration.parent.name?.text &&
                  options.componentNames.includes(
                    propsDeclaration.parent.name.text,
                  )
                ) {
                  isReact = true;
                }
              } else if (
                options.componentNames.includes(reactSymbolTypeSymbol.name)
              ) {
                isReact = true;
              }
              if (isReact) {
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
      }
    }
  }
  return symbolType;
};
