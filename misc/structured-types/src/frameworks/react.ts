import * as ts from 'typescript';
import { TypeResolver, getSymbolType } from '../ts-utils';
import { isObjectTypeDeclaration } from '../ts-utils';

export interface ReactResolveOptions {
  componentNames?: string[];
}
type NodeCallback = (m: ts.PropertyDeclaration) => boolean;
type NodeFind = (callback: NodeCallback) => ts.PropertyDeclaration | undefined;
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
                  const defaultProps = ((declaration.members
                    ?.find as unknown) as NodeFind)(
                    m => m.name.getText() === 'defaultProps',
                  );
                  const displayName = ((declaration.members
                    ?.find as unknown) as NodeFind)(
                    m => m.name.getText() === 'displayName',
                  );
                  const props = signatures[0].parameters[0];
                  const propsType = getSymbolType(checker, props) || symbolType;
                  if (propsType.isUnionOrIntersection()) {
                    return {
                      type: propsType.types[0],
                      intializer: defaultProps?.initializer,
                      name: displayName?.initializer?.getText(),
                    };
                  }
                  return {
                    type: propsType,
                    intializer: defaultProps?.initializer,
                    name: displayName?.initializer?.getText(),
                  };
                }
              }
            }
          }
        }
      }
    }
  }
  return { type: symbolType };
};
