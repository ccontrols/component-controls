import * as ts from 'typescript';
import {
  TypeResolver,
  getSymbolType,
  getFunctionLike,
  getInitializer,
  tsKindToPropKind,
} from '../ts-utils';
import { isObjectTypeDeclaration, getObjectStaticProp } from '../ts-utils';
import { PropKind } from '../types';

export const typeResolver: TypeResolver = ({
  symbolType,
  declaration,
  checker,
}) => {
  let propsType = symbolType;
  let initializer: ts.Node | undefined = getInitializer(declaration);
  let name = undefined;
  let kind = undefined;
  if ((symbolType.flags & ts.TypeFlags.Object) === ts.TypeFlags.Object) {
    if (declaration) {
      if (isObjectTypeDeclaration(declaration)) {
        const jsx = checker.getJsxIntrinsicTagNamesAt(declaration);
        if (jsx) {
          kind = PropKind.Class;
          const signatures = symbolType.getConstructSignatures();
          if (signatures.length > 0 && signatures[0].parameters.length) {
            const props = signatures[0].parameters[0];
            propsType = getSymbolType(checker, props) || symbolType;

            if (propsType.isUnionOrIntersection()) {
              propsType = propsType.types[0];
            }
          }
        }
      } else {
        const reactFunction = getFunctionLike(declaration);
        if (reactFunction) {
          const jsx = checker.getJsxIntrinsicTagNamesAt(reactFunction);
          if (jsx) {
            kind = PropKind.Function;
            if (reactFunction.parameters.length) {
              const props = reactFunction.parameters[0];
              if (ts.isObjectBindingPattern(props.name)) {
                initializer = props.name;
              }
              propsType = checker.getTypeAtLocation(props);
            }
          }
        }
      }
      const defaultProps = getObjectStaticProp(declaration, 'defaultProps');
      if (defaultProps) {
        initializer = defaultProps;
      }
      const displayName = getObjectStaticProp(declaration, 'displayName');
      name =
        displayName && ts.isStringLiteral(displayName)
          ? displayName.text
          : undefined;
    }
  }
  return { type: propsType, name, initializer, kind };
};
