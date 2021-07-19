import * as ts from 'typescript';
import { getSymbolType, getFunctionLike, getInitializer } from '../ts-utils';
import {
  isObjectTypeDeclaration,
  getObjectStaticProp,
  ParsePlugin,
} from '../ts-utils';
import { PropKind } from '../types';

const reactPLugin: ParsePlugin = {
  internalTypes: ['PropsWithChildren'],
  typesResolve: ({ symbolType, declaration, checker }) => {
    let propsType = symbolType;
    let initializer: ts.Node | undefined = undefined;
    let name = undefined;
    let kind = undefined;
    let framework = undefined;
    let defaultProps = undefined;
    let displayName = undefined;
    if ((symbolType.flags & ts.TypeFlags.Object) === ts.TypeFlags.Object) {
      if (declaration) {
        if (isObjectTypeDeclaration(declaration)) {
          initializer = getInitializer(declaration);
          const jsx = checker.getJsxIntrinsicTagNamesAt(declaration);
          if (jsx) {
            defaultProps = getObjectStaticProp(declaration, 'defaultProps');
            displayName = getObjectStaticProp(declaration, 'displayName');

            framework = 'react';
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
          const reactFunction = getFunctionLike(checker, declaration);
          if (reactFunction) {
            const jsx = checker.getJsxIntrinsicTagNamesAt(reactFunction);
            if (jsx) {
              defaultProps = getObjectStaticProp(
                reactFunction.parent,
                'defaultProps',
              );
              displayName =
                getObjectStaticProp(reactFunction.parent, 'displayName') ||
                reactFunction.name?.getText() ||
                (ts.isVariableDeclaration(reactFunction.parent) &&
                  reactFunction.parent.name.getText());
              framework = 'react';
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
      }
    }
    name =
      typeof displayName === 'string'
        ? displayName
        : displayName && ts.isStringLiteral(displayName)
        ? displayName.text
        : undefined;
    if (defaultProps) {
      initializer = defaultProps;
    }

    return {
      type: propsType,
      name,
      initializer,
      kind,
      framework,
      skipGenerics: kind === PropKind.Function,
      skipParameters: kind === PropKind.Function,
    };
  },
};

export default reactPLugin;
