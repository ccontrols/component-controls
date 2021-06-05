import * as ts from 'typescript';
import {
  PropType,
  PropKind,
  ArrayProp,
  InterfaceProp,
  TypeProp,
  isClassProp,
  ClassProp,
  IndexProp,
  ConstructorProp,
  FunctionProp,
  UnionProp,
  EnumProp,
  TupleProp,
  ReferenceProp,
  RestProp,
  ObjectProp,
  isObjectProp,
  NumberProp,
  StringProp,
  BooleanProp,
  AnyProp,
  UnknownProp,
} from './utils';
import { mergeJSDocComments } from './jsdoc-parse';

const strToValue = (s: string): any => {
  switch (s) {
    case 'undefined':
      return undefined;
    case 'null':
      return null;
    case 'false':
      return false;
    case 'true':
      return true;
  }
  return s;
};

const getElementType = (
  defaults: PropType,
  type?: ts.Node,
  initializer?: ts.Node,
): PropType => {
  const node = type || initializer;
  let result: PropType = { ...defaults };
  if (node) {
    if (
      ts.isArrayTypeNode(node) ||
      ts.isArrayLiteralExpression(node) ||
      (ts.isTypeReferenceNode(node) && node.typeName.getText() === 'Array')
    ) {
      result.kind = PropKind.Array;

      if (ts.isArrayTypeNode(node)) {
        (result as ArrayProp).elements = [getElementType({}, node.elementType)];
      } else if (ts.isTypeReferenceNode(node) && node.typeArguments?.length) {
        (result as ArrayProp).elements = node.typeArguments.map(m =>
          getElementType({}, m),
        );
      }
      if (initializer) {
        (result as ArrayProp).value = (initializer as ts.ArrayBindingPattern).elements.map(
          m => getElementType({}, m, m),
        );
      }
    } else if (ts.isInterfaceDeclaration(node)) {
      result.kind = PropKind.Interface;
      if (node.heritageClauses?.length) {
        (result as InterfaceProp).extends = node.heritageClauses.reduce(
          (acc, h) => {
            return [
              ...acc,
              ...h.types.map(t =>
                getElementType({ kind: PropKind.Interface }, t.expression),
              ),
            ];
          },
          [] as PropType[],
        );
      }

      (result as InterfaceProp).properties = node.members.map(m =>
        parseNode({}, m),
      );
      if (node.typeParameters?.length) {
        (result as InterfaceProp).generics = node.typeParameters.map(m =>
          parseNode({}, m),
        );
      }
    } else if (ts.isClassDeclaration(node)) {
      result.kind = PropKind.Class;
      if (isClassProp(result)) {
        result.properties = node.members.map(m => {
          return parseNode({}, m);
        });
        if (node.typeParameters) {
          result.generics = node.typeParameters.map(m => {
            return parseNode({}, m);
          });
        }
        if (node.heritageClauses?.length) {
          const classes: ClassProp[] = [];
          const interfaces: InterfaceProp[] = [];
          node.heritageClauses.forEach(h => {
            h.types.forEach(t => {
              const element: ClassProp | InterfaceProp = {};
              if (t.typeArguments?.length) {
                element.properties = t.typeArguments.map(a => parseNode({}, a));
              }
              if (h.token === ts.SyntaxKind.ExtendsKeyword) {
                element.kind = PropKind.Class;
                classes.push(getElementType(element, t.expression));
              } else {
                element.kind = PropKind.Interface;
                interfaces.push(getElementType(element, t.expression));
              }
            });
          });
          if (classes.length) {
            result.extends = classes;
          }
          if (interfaces.length) {
            result.implements = interfaces;
          }
        }
      }
    } else if (ts.isIndexSignatureDeclaration(node)) {
      result.kind = PropKind.Index;
      (result as IndexProp).index = getElementType({}, node.type);
      (result as IndexProp).properties = node.parameters.map(m =>
        getElementType({}, m),
      );
    } else if (ts.isConstructorDeclaration(node)) {
      result.kind = PropKind.Constructor;

      if (node.parameters.length) {
        (result as ConstructorProp).parameters = node.parameters.map(m =>
          parseNode({}, m),
        );
      }
    } else if (ts.isGetAccessor(node) || ts.isSetAccessor(node)) {
      result.kind = ts.isSetAccessor(node) ? PropKind.Setter : PropKind.Getter;
      if (node.parameters.length) {
        (result as FunctionProp).parameters = node.parameters.map(m =>
          parseNode({}, m),
        );
      }
    } else if (ts.isIntersectionTypeNode(node)) {
      result.kind = PropKind.Type;
      (result as TypeProp).properties = node.types.map(m =>
        getElementType({}, m),
      );
    } else if (ts.isTypeLiteralNode(node)) {
      result.kind = PropKind.Type;
      (result as TypeProp).properties = node.members.map(m => parseNode({}, m));
    } else if (ts.isTypeAliasDeclaration(node)) {
      result.kind = PropKind.Type;
      const type = getElementType({}, node.type);
      if (type.kind !== result.kind) {
        (result as TypeProp).type = type;
      } else {
        result = { ...result, ...type };
      }
    } else if (ts.isOptionalTypeNode(node)) {
      result.optional = true;
      result = getElementType(result, node.type);
    } else if (ts.isUnionTypeNode(node)) {
      result.kind = PropKind.Union;
      (result as UnionProp).properties = node.types.map(m =>
        getElementType({}, m, (m as ts.LiteralTypeNode).literal),
      );
    } else if (ts.isEnumDeclaration(node)) {
      result.kind = PropKind.Enum;
      (result as EnumProp).properties = node.members.map(m =>
        parseNode({}, m, m.initializer),
      );
    } else if (ts.isEnumMember(node)) {
      if (initializer) {
        result = getElementType(result, undefined, initializer);
      }
    } else if (ts.isTupleTypeNode(node)) {
      result.kind = PropKind.Tuple;
      (result as TupleProp).properties = node.elements.map(m =>
        getElementType({}, m),
      );
    } else if (ts.isTypePredicateNode(node)) {
      result.kind = PropKind.Predicate;
      if (node.type) {
        result = parseNode(result, node.type, initializer);
      }
    } else if (ts.isTypeReferenceNode(node)) {
      result.kind = PropKind.Reference;
      result = getElementType(result, node.typeName, initializer);
      if (node.typeArguments?.length) {
        (result as ReferenceProp).types = node.typeArguments.map(m =>
          getElementType({}, m),
        );
      }
    } else if (ts.isLiteralTypeNode(node)) {
      result = getElementType(result, node.literal, node.literal);
    } else if (ts.isQualifiedName(node)) {
      result = parseNode(result, node.left, node.right);
    } else if (ts.isRestTypeNode(node)) {
      result.kind = PropKind.Rest;
      (result as RestProp).type = getElementType(result, node.type);
    } else if (
      ts.isTypeOperatorNode(node) ||
      ts.isParenthesizedTypeNode(node)
    ) {
      result = getElementType(result, node.type);
    } else if (ts.isPropertyAccessExpression(node)) {
      result.name = `${node.expression.getText()}.${node.name.text}`;
    } else if (ts.isIdentifier(node)) {
      if (initializer && ts.isIdentifier(initializer)) {
        result.name = `${node.text}.${initializer.text}`;
      } else {
        result.name = node.text;
      }
    } else if (ts.isNewExpression(node)) {
      result.kind = PropKind.Object;
      (result as ObjectProp).reference = getElementType(
        { kind: PropKind.Reference },
        node.expression,
      );
      if (node.arguments) {
        (result as ObjectProp).properties = node.arguments.map(m =>
          getElementType({}, m, m),
        );
      }
    } else if (ts.isVariableDeclaration(node)) {
      if (node.type && node.initializer) {
        //a type reference, the type will need to be deducted
        result.type = getElementType({}, node.type);
        result = getElementType(result, node.initializer);
      } else {
        result = getElementType(result, node.type, node.initializer);
      }
    } else if (ts.isPropertySignature(node) || ts.isParameter(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      result = getElementType(result, node.type, node.initializer);
    } else if (ts.isPropertyAssignment(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      result = getElementType(result, node.initializer, node.initializer);
    } else if (ts.isPropertyDeclaration(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      result = getElementType(result, node.type, node.initializer);
    } else if (ts.isTypeParameterDeclaration(node)) {
      if (node.default) {
        result = parseNode(result, node.default);
      }
    } else if (
      ts.isFunctionDeclaration(node) ||
      ts.isArrowFunction(node) ||
      ts.isFunctionTypeNode(node) ||
      ts.isMethodSignature(node) ||
      ts.isMethodDeclaration(node)
    ) {
      if (!ts.isFunctionTypeNode(node) && node.questionToken) {
        result.optional = true;
      }
      result.kind = PropKind.Function;
      if (node.parameters.length) {
        (result as FunctionProp).parameters = node.parameters.map(m => {
          return parseNode({}, m, m.initializer);
        });
      }
      if (node.type) {
        (result as FunctionProp).returns = getElementType({}, node.type);
      }
      if (node.typeParameters?.length) {
        (result as FunctionProp).types = node.typeParameters.map(m =>
          parseNode({}, m),
        );
      }
    } else {
      switch (node.kind) {
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NumberKeyword:
          result.kind = PropKind.Number;
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            (result as NumberProp).value = Number(
              (initializer as ts.LiteralLikeNode).text,
            );
          }
          break;

        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.StringKeyword:
          result.kind = PropKind.String;
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            (result as StringProp).value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.FalseKeyword:
          result.kind = PropKind.Boolean;
          (result as BooleanProp).value = false;

          break;

        case ts.SyntaxKind.TrueKeyword:
          result.kind = PropKind.Boolean;
          (result as BooleanProp).value = true;
          break;
        case ts.SyntaxKind.BooleanKeyword:
          result.kind = PropKind.Boolean;
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            (result as BooleanProp).value = Boolean(
              (initializer as ts.LiteralLikeNode).text,
            );
          }
          break;
        case ts.SyntaxKind.VoidKeyword:
          result.kind = PropKind.Void;
          break;
        case ts.SyntaxKind.ObjectKeyword:
          result.kind = PropKind.Object;
          (result as ObjectProp).value = strToValue(
            (initializer as ts.LiteralLikeNode)?.text,
          );

          break;
        case ts.SyntaxKind.AnyKeyword:
          result.kind = PropKind.Any;
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            (result as AnyProp).value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.UnknownKeyword:
          result.kind = PropKind.Unknown;
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            (result as UnknownProp).value = strToValue(
              (initializer as ts.LiteralLikeNode)?.text,
            );
          }
          break;
        case ts.SyntaxKind.NullKeyword:
          result.kind = PropKind.Null;
          break;
        case ts.SyntaxKind.UndefinedKeyword:
          result.kind = PropKind.Undefined;
          break;
      }
    }
    if (initializer && ts.isObjectLiteralExpression(initializer)) {
      const value = initializer.properties.map(m => parseNode({}, m));
      if (isObjectProp(result)) {
        result.value = value;
      }
    }
  }
  return result;
};

type JSDocInfoType = {
  comment?: string;
  tags?: {
    comment: string;
    name: { text: string };
    tagName: { text: string };
  }[];
};

export const parseNode = (
  defaults: PropType,
  node: (ts.DeclarationStatement | ts.Node) & {
    jsDoc?: JSDocInfoType[];
  },
  initializer?: ts.Node,
  jsDocsDefaults?: JSDocInfoType[],
): PropType => {
  const updated = { ...defaults };
  if ((node as ts.DeclarationStatement).name?.text) {
    updated.name = (node as ts.DeclarationStatement).name?.text;
  }
  if (node.modifiers) {
    for (const m of node.modifiers) {
      if (m.kind === ts.SyntaxKind.PrivateKeyword) {
        updated.visibility = 'private';
      } else if (m.kind === ts.SyntaxKind.ProtectedKeyword) {
        updated.visibility = 'protected';
      } else if (m.kind === ts.SyntaxKind.PublicKeyword) {
        updated.visibility = 'public';
      } else if (m.kind === ts.SyntaxKind.StaticKeyword) {
        updated.static = true;
      } else if (m.kind === ts.SyntaxKind.ReadonlyKeyword) {
        updated.readonly = true;
      } else if (m.kind === ts.SyntaxKind.AbstractKeyword) {
        updated.abstract = true;
        // } else if (m.kind === ts.SyntaxKind.ExportKeyword) {
        //   updated.exported = true;
      }
    }
  }
  const result = getElementType(updated, node, initializer);
  const jsDocs = jsDocsDefaults || node.jsDoc;
  if (jsDocs) {
    const docs: {
      descriptions: string[];
      tags: string[];
    } = jsDocs.reduce(
      (
        acc: {
          descriptions: string[];
          tags: string[];
        },
        { comment, tags },
      ) => {
        const newTags = tags
          ? tags.map(({ comment, name, tagName }) => {
              return `* @${tagName.text}${`${name ? ` ${name.text}` : ''}`}${
                comment ? ` ${comment}` : ''
              }`;
            })
          : [];
        return {
          descriptions: comment
            ? [...acc.descriptions, `* ${comment}`]
            : acc.descriptions,
          tags: [...acc.tags, ...newTags],
        };
      },
      {
        descriptions: [],
        tags: [],
      },
    );

    const withJsDoc = mergeJSDocComments(
      result,
      [...docs.descriptions, ...docs.tags].join('\n'),
    );
    return withJsDoc;
  }
  return result;
};

export const parseSymbol = (
  checker: ts.TypeChecker,
  symbol?: ts.Symbol,
): PropType | undefined => {
  if (!symbol) {
    return undefined;
  }
  const declaration = symbol.declarations[0] as ts.VariableDeclaration;
  const comments = symbol
    .getDocumentationComment(checker)
    .map(({ text }) => text);
  const tags = symbol.getJsDocTags().map(t => {
    if (t.text) {
      const firstSpace = t.text.indexOf(' ');
      return {
        tagName: { text: t.name },
        name: { text: t.text.substr(0, firstSpace) },
        comment: t.text.substr(firstSpace + 1),
      };
    }
    return { tagName: { text: t.name }, name: { text: '' }, comment: '' };
  });
  return parseNode({}, declaration, declaration?.initializer, [
    { comment: comments.join('/n * '), tags },
  ]);
};
