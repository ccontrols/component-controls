import ts from 'typescript';
import { PropKind } from './utils';

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
  [ts.SyntaxKind.ClassDeclaration]: PropKind.Class,
  [ts.SyntaxKind.ClassExpression]: PropKind.Class,
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
  | ts.InterfaceDeclaration
  | ts.TypeLiteralNode;
export const isObjectTypeDeclaration = (
  node: ts.Node,
): node is ObjectTypeDeclaration => {
  return (
    node.kind === ts.SyntaxKind.ClassDeclaration ||
    node.kind === ts.SyntaxKind.ClassExpression ||
    node.kind === ts.SyntaxKind.InterfaceDeclaration ||
    node.kind === ts.SyntaxKind.TypeLiteral
  );
};

export type GenericsType = ObjectTypeDeclaration | ts.TypeAliasDeclaration;

export const isGenericsType = (node: ts.Node): node is GenericsType =>
  isObjectTypeDeclaration(node) ||
  node.kind === ts.SyntaxKind.TypeAliasDeclaration;

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
    (ts.isTypeReferenceNode(node) && node.typeName.getText() === 'Array')
  );
};
