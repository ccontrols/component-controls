import * as ts from 'typescript';
import { PropKind, PropType } from './types';

type VariableDeclaration =
  | ts.VariableDeclaration
  | ts.ParameterDeclaration
  | ts.BindingElement
  | ts.PropertyDeclaration
  | ts.PropertySignature
  | ts.JsxAttribute
  | ts.EnumMember;

export const isVariableLikeDeclaration = (
  node: ts.Node,
): node is VariableDeclaration => {
  return (
    node.kind === ts.SyntaxKind.VariableDeclaration ||
    node.kind === ts.SyntaxKind.Parameter ||
    node.kind === ts.SyntaxKind.BindingElement ||
    node.kind === ts.SyntaxKind.PropertyDeclaration ||
    node.kind === ts.SyntaxKind.PropertyAssignment ||
    node.kind === ts.SyntaxKind.PropertySignature ||
    node.kind === ts.SyntaxKind.JsxAttribute ||
    node.kind === ts.SyntaxKind.EnumMember
  );
};

export const isHasType = (node: ts.Node): node is ts.HasType => {
  return (
    node.kind === ts.SyntaxKind.CallSignature ||
    node.kind === ts.SyntaxKind.ConstructSignature ||
    node.kind === ts.SyntaxKind.MethodSignature ||
    node.kind === ts.SyntaxKind.IndexSignature ||
    node.kind === ts.SyntaxKind.FunctionType ||
    node.kind === ts.SyntaxKind.MethodDeclaration ||
    node.kind === ts.SyntaxKind.Constructor ||
    node.kind === ts.SyntaxKind.GetAccessor ||
    node.kind === ts.SyntaxKind.SetAccessor ||
    node.kind === ts.SyntaxKind.FunctionExpression ||
    node.kind === ts.SyntaxKind.ArrowFunction ||
    node.kind === ts.SyntaxKind.VariableDeclaration ||
    node.kind === ts.SyntaxKind.Parameter ||
    node.kind === ts.SyntaxKind.PropertySignature ||
    node.kind === ts.SyntaxKind.PropertyDeclaration ||
    node.kind === ts.SyntaxKind.TypePredicate ||
    node.kind === ts.SyntaxKind.ParenthesizedType ||
    node.kind === ts.SyntaxKind.TypeOperator ||
    node.kind === ts.SyntaxKind.MappedType ||
    node.kind === ts.SyntaxKind.TypeAssertionExpression ||
    node.kind === ts.SyntaxKind.AsExpression ||
    node.kind === ts.SyntaxKind.TypeAliasDeclaration
  );
};

export const tsKindToPropKind: { [key in ts.SyntaxKind]?: PropKind } = {
  [ts.SyntaxKind.StringKeyword]: PropKind.String,
  [ts.SyntaxKind.StringLiteral]: PropKind.String,
  [ts.SyntaxKind.NumberKeyword]: PropKind.Number,
  [ts.SyntaxKind.NumericLiteral]: PropKind.Number,
  [ts.SyntaxKind.BooleanKeyword]: PropKind.Boolean,
  [ts.SyntaxKind.EnumDeclaration]: PropKind.Enum,
  [ts.SyntaxKind.UnionType]: PropKind.Union,
  [ts.SyntaxKind.ClassDeclaration]: PropKind.Class,
  [ts.SyntaxKind.ClassExpression]: PropKind.Class,
  [ts.SyntaxKind.ClassDeclaration]: PropKind.Class,
  [ts.SyntaxKind.InterfaceDeclaration]: PropKind.Interface,
  [ts.SyntaxKind.TypeLiteral]: PropKind.Type,
  [ts.SyntaxKind.TypeReference]: PropKind.Type,
  [ts.SyntaxKind.CallSignature]: PropKind.Function,
  [ts.SyntaxKind.ConstructSignature]: PropKind.Constructor,
  [ts.SyntaxKind.MethodSignature]: PropKind.Function,
  [ts.SyntaxKind.FunctionDeclaration]: PropKind.Function,
  [ts.SyntaxKind.FunctionType]: PropKind.Function,
  [ts.SyntaxKind.MethodDeclaration]: PropKind.Function,
  [ts.SyntaxKind.Constructor]: PropKind.Constructor,
  [ts.SyntaxKind.GetAccessor]: PropKind.Getter,
  [ts.SyntaxKind.SetAccessor]: PropKind.Setter,
  [ts.SyntaxKind.FunctionExpression]: PropKind.Function,
  [ts.SyntaxKind.ArrowFunction]: PropKind.Function,
  [ts.SyntaxKind.TypePredicate]: PropKind.Type,
  [ts.SyntaxKind.TypeOperator]: PropKind.Type,
  [ts.SyntaxKind.MappedType]: PropKind.Type,
  [ts.SyntaxKind.TypeAssertionExpression]: PropKind.Type,
  [ts.SyntaxKind.TypeAliasDeclaration]: PropKind.Type,
  [ts.SyntaxKind.IndexSignature]: PropKind.Index,
  [ts.SyntaxKind.ArrayType]: PropKind.Array,
};
export type ObjectTypeDeclaration =
  | ts.ClassDeclaration
  | ts.ClassExpression
  | ts.InterfaceDeclaration;
export const isObjectTypeDeclaration = (
  node: ts.Node,
): node is ObjectTypeDeclaration => {
  return (
    node.kind === ts.SyntaxKind.ClassDeclaration ||
    node.kind === ts.SyntaxKind.ClassExpression ||
    node.kind === ts.SyntaxKind.InterfaceDeclaration
  );
};

export type TypeParameterType = ObjectTypeDeclaration | ts.TypeAliasDeclaration;
export const isTypeParameterType = (node: ts.Node): node is TypeParameterType =>
  isObjectTypeDeclaration(node) ||
  node.kind === ts.SyntaxKind.TypeAliasDeclaration;

export type GenericsType = TypeParameterType | ts.TypeLiteralNode;

export const isGenericsType = (node: ts.Node): node is GenericsType =>
  isTypeParameterType(node) || node.kind === ts.SyntaxKind.TypeLiteral;

export type FunctionLike =
  | ts.FunctionDeclaration
  | ts.ConstructorDeclaration
  | ts.GetAccessorDeclaration
  | ts.SetAccessorDeclaration
  | ts.ArrowFunction
  | ts.FunctionTypeNode
  | ts.MethodSignature
  | ts.MethodDeclaration;

export const isFunctionLike = (node: ts.Node): node is FunctionLike => {
  return (
    node.kind === ts.SyntaxKind.FunctionDeclaration ||
    node.kind === ts.SyntaxKind.ArrowFunction ||
    node.kind === ts.SyntaxKind.Constructor ||
    node.kind === ts.SyntaxKind.GetAccessor ||
    node.kind === ts.SyntaxKind.SetAccessor ||
    node.kind === ts.SyntaxKind.FunctionType ||
    node.kind === ts.SyntaxKind.MethodSignature ||
    node.kind === ts.SyntaxKind.MethodDeclaration
  );
};

export type ArrayLike =
  | ts.ArrayTypeNode
  | ts.ArrayLiteralExpression
  | ts.TypeReferenceNode;

export const isArrayLike = (node: ts.Node): node is ArrayLike => {
  return (
    node.kind === ts.SyntaxKind.ArrayType ||
    node.kind === ts.SyntaxKind.ArrayLiteralExpression ||
    (ts.isTypeReferenceNode(node) &&
      ['ArrayConstructor', 'Array'].includes(node.typeName.getText()))
  );
};

export const tsDefaults: ts.CompilerOptions = {
  jsx: ts.JsxEmit.ReactJSX,
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES2017,
  noImplicitAny: true,
  noImplicitReturns: true,
  strictNullChecks: true,
  strictFunctionTypes: true,
  strictBindCallApply: true,
  strictPropertyInitialization: true,
  noImplicitThis: true,
  alwaysStrict: true,
  allowJs: true,
  checkJs: true,
};

export type CompileOptions = {
  tsOptions?: ts.CompilerOptions & { lang?: 'typescript' | 'javascript' };
};

/**
 * parsing options
 */
export interface ParseOptions {
  /**
   * type resolving custom function
   * ie from a react component will return the props type
   */
  resolvers?: TypeResolver[];
  /**
   * internal types - libs
   * by default includes classes such as `String`, `Function`...
   */
  internalTypes?: string[];
  /**
   * list of export names to be extracted.
   * by default all exports are extracted
   */
  extractNames?: string[];
  /**
   * whether to save the "parent" props
   * if set to false will result in a smaller result
   */
  saveParentProps?: boolean;
  /**
   * whether to collect errors/diagnostics
   */
  collectDiagnostics?: boolean;
}

export const defaultParseOptions: ParseOptions = {
  saveParentProps: true,
  internalTypes: [
    'Function',
    'CallableFunction',
    'NewableFunction',
    'String',
    'Boolean',
    'Booleanish',
    'Number',
    'Array',
    'Promise',
    'ConcatArray',
    'ReadonlyArray',
    'TemplateStringsArray',
  ],
};

export type DocsOptions = CompileOptions & ParseOptions;

export type TypeResolver = (props: {
  symbolType: ts.Type;
  declaration?: ts.Declaration;
  checker: ts.TypeChecker;
}) => {
  type: ts.Type | undefined;
  initializer?: ts.Node;
  name?: string;
  kind?: PropKind;
};

export const resolveType: (
  props: Parameters<TypeResolver>[0],
  resolvers?: TypeResolver[],
) => ReturnType<TypeResolver> = (props, resolvers) => {
  if (resolvers) {
    return resolvers.reduce(
      (acc: ReturnType<TypeResolver>, resolver) => {
        return (
          resolver({ ...props, symbolType: acc.type || props.symbolType }) ||
          acc
        );
      },
      { type: props.symbolType },
    );
  }
  return {
    type: props.symbolType,
    initializer: getInitializer(props.declaration),
  };
};

export const updatePropKind = (
  prop: PropType,
  typeNode?: ts.Type,
): PropType => {
  if (typeNode) {
    if (typeNode.flags & ts.TypeFlags.Unknown) {
      prop.kind = PropKind.Unknown;
    } else if (typeNode.flags & ts.TypeFlags.String) {
      prop.kind = PropKind.String;
    } else if (typeNode.flags & ts.TypeFlags.Number) {
      prop.kind = PropKind.Number;
    } else if (typeNode.flags & ts.TypeFlags.Boolean) {
      prop.kind = PropKind.Boolean;
    } else if (typeNode.flags & ts.TypeFlags.Enum) {
      prop.kind = PropKind.Enum;
    } else if (typeNode.flags & ts.TypeFlags.BigInt) {
      prop.kind = PropKind.BigInt;
    } else if (typeNode.flags & ts.TypeFlags.Void) {
      prop.kind = PropKind.Void;
    } else if (typeNode.flags & ts.TypeFlags.Undefined) {
      prop.kind = PropKind.Undefined;
    } else if (typeNode.flags & ts.TypeFlags.Null) {
      prop.kind = PropKind.Null;
    }
  }
  return prop;
};

export const getSymbolType = (
  checker: ts.TypeChecker,
  symbol: ts.Symbol,
): ts.Type | undefined => {
  const declaration = symbol.valueDeclaration || symbol.declarations?.[0];
  if (declaration) {
    const type = checker.getTypeOfSymbolAtLocation(symbol, declaration);
    if (
      !('intrinsicName' in type) ||
      ((type as unknown) as { intrinsicName: string }).intrinsicName !== 'error'
    ) {
      return type;
    }
  }
  const symbolType = checker.getDeclaredTypeOfSymbol(symbol);
  if (
    !('intrinsicName' in symbolType) ||
    ((symbolType as unknown) as { intrinsicName: string }).intrinsicName !==
      'error'
  ) {
    return symbolType;
  }
  return undefined;
};

export interface ISymbolParser {
  parseType(prop: PropType, node?: ts.Node): PropType;
  parseSymbol(symbol: ts.Symbol): PropType | null;
}

export const getInitializer = (
  declaration?: ts.Node,
): ts.Expression | undefined =>
  declaration
    ? isVariableLikeDeclaration(declaration)
      ? declaration?.initializer
      : ts.isBinaryExpression(declaration.parent)
      ? declaration.parent.right
      : undefined
    : undefined;

type NodeCallback = (m: ts.PropertyDeclaration) => boolean;
type NodeFind = (callback: NodeCallback) => ts.PropertyDeclaration | undefined;

export const updateModifiers = (
  prop: PropType,
  declaration?: ts.Declaration,
): PropType => {
  if (declaration) {
    if ((declaration as ts.ParameterDeclaration).questionToken) {
      prop.optional = true;
    }
    if (declaration.modifiers) {
      for (const m of declaration.modifiers) {
        if (m.kind === ts.SyntaxKind.PrivateKeyword) {
          prop.visibility = 'private';
        } else if (m.kind === ts.SyntaxKind.ProtectedKeyword) {
          prop.visibility = 'protected';
        } else if (m.kind === ts.SyntaxKind.PublicKeyword) {
          prop.visibility = 'public';
        } else if (m.kind === ts.SyntaxKind.StaticKeyword) {
          prop.static = true;
        } else if (m.kind === ts.SyntaxKind.ReadonlyKeyword) {
          prop.readonly = true;
        } else if (m.kind === ts.SyntaxKind.AbstractKeyword) {
          prop.abstract = true;
        }
      }
    }
  }
  return prop;
};

const findFileNode = (node: ts.Node): ts.SourceFile | undefined => {
  if (ts.isSourceFile(node)) {
    return node;
  }
  if (node.parent) {
    return findFileNode(node.parent);
  }
  return undefined;
};

export const getFunctionLike = (node: ts.Node): FunctionLike | undefined => {
  if (
    ts.isVariableDeclaration(node) &&
    node.initializer &&
    isFunctionLike(node.initializer)
  ) {
    return node.initializer;
  } else if (isFunctionLike(node)) {
    return node;
  }
  return undefined;
};
export const getObjectStaticProp = (
  obj: ts.Node,
  propName: string,
): ts.Expression | undefined => {
  const staticProp =
    isObjectTypeDeclaration(obj) &&
    ((obj.members?.find as unknown) as NodeFind)(
      m => m.name.getText() === propName,
    );
  if (staticProp) {
    return staticProp.initializer;
  }
  //find filoe global static props assigments
  //ie MyComponent.displayName = 'XXX';
  if ('name' in obj) {
    const objName = ((obj as any)['name'] as ts.PropertyName)?.getText();
    if (objName) {
      const fileContainer = findFileNode(obj);
      if (fileContainer) {
        for (const statement of fileContainer.statements) {
          if (ts.isExpressionStatement(statement)) {
            const expression = statement.expression;
            if (
              ts.isBinaryExpression(expression) &&
              ts.isPropertyAccessExpression(expression.left) &&
              expression.left.expression.getText() === objName
            ) {
              if (expression.left.name.text === propName) {
                return expression.right;
              }
            }
          }
        }
      }
    }
  }
  return undefined;
};
