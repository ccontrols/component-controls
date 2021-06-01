import * as ts from 'typescript';
import { JSDocType } from './utils';
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
  defaults: JSDocType,
  type?: ts.Node,
  initializer?: ts.Node,
): JSDocType => {
  const node = type || initializer;
  let result: JSDocType = { ...defaults };
  if (node) {
    if (
      ts.isArrayTypeNode(node) ||
      ts.isArrayLiteralExpression(node) ||
      (ts.isTypeReferenceNode(node) && node.typeName.getText() === 'Array')
    ) {
      result.type = 'array';

      if (ts.isArrayTypeNode(node)) {
        result.properties = [getElementType({}, node.elementType)];
      } else if (ts.isTypeReferenceNode(node) && node.typeArguments?.length) {
        result.properties = node.typeArguments.map(m => getElementType({}, m));
      }
      if (initializer) {
        result.value = (initializer as ts.ArrayBindingPattern).elements.map(m =>
          getElementType({}, m, m),
        );
      }
    } else if (ts.isInterfaceDeclaration(node)) {
      result.type = 'interface';
      if (node.heritageClauses?.length) {
        result.inherits = node.heritageClauses.reduce((acc, h) => {
          return [
            ...acc,
            ...h.types.map(t =>
              getElementType({ type: 'interface' }, t.expression),
            ),
          ];
        }, [] as JSDocType[]);
      }

      result.properties = node.members.map(m => parseNode({}, m));
      if (node.typeParameters?.length) {
        result.parameters = node.typeParameters.map(m => parseNode({}, m));
      }
    } else if (ts.isClassDeclaration(node)) {
      result.type = 'class';
      result.properties = node.members.map(m => {
        return parseNode({}, m);
      });
      if (node.typeParameters) {
        result.parameters = node.typeParameters.map(m => {
          return parseNode({}, m);
        });
      }
      if (node.heritageClauses?.length) {
        result.inherits = node.heritageClauses.reduce((acc, h) => {
          return [
            ...acc,
            ...h.types.map(t => {
              const element: JSDocType = {
                type:
                  h.token === ts.SyntaxKind.ExtendsKeyword
                    ? 'class'
                    : 'interface',
              };
              if (t.typeArguments?.length) {
                element.parameters = t.typeArguments.map(a => parseNode({}, a));
              }
              return getElementType(element, t.expression);
            }),
          ];
        }, [] as JSDocType[]);
      }
    } else if (ts.isIndexSignatureDeclaration(node)) {
      result.type = 'index';
      result.parameters = [getElementType({}, node.type)];
      result.properties = node.parameters.map(m => getElementType({}, m));
    } else if (ts.isConstructorDeclaration(node)) {
      result.name = 'constructor';
      result.fnType = 'constructor';
      result.type = 'function';
      if (node.parameters.length) {
        result.parameters = node.parameters.map(m => parseNode({}, m));
      }
    } else if (ts.isGetAccessor(node) || ts.isSetAccessor(node)) {
      result.type = 'function';
      result.fnType = ts.isSetAccessor(node) ? 'setter' : 'getter';
      if (node.parameters.length) {
        result.parameters = node.parameters.map(m => parseNode({}, m));
      }
    } else if (ts.isIntersectionTypeNode(node)) {
      result.type = 'type';
      result.properties = node.types.map(m => getElementType({}, m));
    } else if (ts.isTypeLiteralNode(node)) {
      result.type = 'type';
      result.properties = node.members.map(m => parseNode({}, m));
    } else if (ts.isTypeAliasDeclaration(node)) {
      result.type = 'type';
      result.returns = getElementType({}, node.type);
    } else if (ts.isOptionalTypeNode(node)) {
      result.optional = true;
      result = getElementType(result, node.type);
    } else if (ts.isUnionTypeNode(node)) {
      result.type = 'union';
      result.properties = node.types.map(m =>
        getElementType({}, m, (m as ts.LiteralTypeNode).literal),
      );
    } else if (ts.isEnumDeclaration(node)) {
      result.type = 'enum';
      result.properties = node.members.map(m =>
        parseNode({}, m, m.initializer),
      );
    } else if (ts.isEnumMember(node)) {
      if (initializer) {
        result = getElementType(result, undefined, initializer);
      }
    } else if (ts.isTupleTypeNode(node)) {
      result.type = 'tuple';
      result.properties = node.elements.map(m => getElementType({}, m));
    } else if (ts.isTypePredicateNode(node)) {
      result.fnType = 'predicate';

      if (node.type) {
        result = parseNode(result, node.type, initializer);
      }
    } else if (ts.isTypeReferenceNode(node)) {
      result.type = 'reference';
      result = parseNode(result, node.typeName, initializer);
      if (node.typeArguments?.length) {
        result.parameters = node.typeArguments.map(m => getElementType({}, m));
      }
    } else if (ts.isLiteralTypeNode(node)) {
      result = getElementType(result, node.literal, node.literal);
    } else if (ts.isQualifiedName(node)) {
      result = parseNode(result, node.left, node.right);
    } else if (ts.isRestTypeNode(node)) {
      result.type = 'rest';
      result.returns = getElementType(result, node.type);
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
      result.type = 'object';
      result.parameters = [
        getElementType({ type: 'reference' }, node.expression),
      ];
      if (node.arguments) {
        result.properties = node.arguments.map(m => getElementType({}, m, m));
      }
    } else if (ts.isVariableDeclaration(node)) {
      result = getElementType(result, node.type, node.initializer);
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
      result.value = getElementType({}, node.type, node.initializer);
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
      result.type = 'function';
      if (node.parameters.length) {
        result.parameters = node.parameters.map(m => {
          return parseNode({}, m, m.initializer);
        });
      }
      if (node.type) {
        result.returns = getElementType({}, node.type);
      }
      if (node.typeParameters?.length) {
        result.properties = node.typeParameters.map(m => parseNode({}, m));
      }
    } else {
      switch (node.kind) {
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NumberKeyword:
          result.type = 'number';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            result.value = Number((initializer as ts.LiteralLikeNode).text);
          }
          break;

        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.StringKeyword:
          result.type = 'string';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            result.value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.FalseKeyword:
          result.value = false;
          result.type = 'boolean';
          break;

        case ts.SyntaxKind.TrueKeyword:
          result.value = true;
          result.type = 'boolean';
          break;
        case ts.SyntaxKind.BooleanKeyword:
          result.type = 'boolean';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            result.value = Boolean((initializer as ts.LiteralLikeNode).text);
          }
          break;
        case ts.SyntaxKind.VoidKeyword:
          result.type = 'void';
          break;
        case ts.SyntaxKind.ObjectKeyword:
          result.type = 'object';
          result.value = strToValue((initializer as ts.LiteralLikeNode)?.text);

          break;
        case ts.SyntaxKind.AnyKeyword:
          result.type = 'any';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            result.value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.UnknownKeyword:
          result.type = 'unknown';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            result.value = strToValue(
              (initializer as ts.LiteralLikeNode)?.text,
            );
          }
          break;
        case ts.SyntaxKind.NullKeyword:
          result.type = 'null';
          result.value = null;
          break;
        case ts.SyntaxKind.UndefinedKeyword:
          result.type = 'undefined';
          result.value = undefined;
          break;
      }
    }
    if (initializer && ts.isObjectLiteralExpression(initializer)) {
      const value = initializer.properties.map(m => parseNode({}, m));
      if (result.type !== 'object') {
        result.value = {
          type: 'object',
          value,
        };
      } else {
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
  defaults: JSDocType,
  node: (ts.DeclarationStatement | ts.Node) & {
    jsDoc?: JSDocInfoType[];
  },
  initializer?: ts.Node,
  jsDocsDefaults?: JSDocInfoType[],
): JSDocType => {
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
