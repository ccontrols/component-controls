import * as ts from 'typescript';
import { mergeJSDocComments } from './jsdoc-parse';
import {
  PropType,
  PropKind,
  BooleanProp,
  typeNameToPropKind,
  isNumberProp,
  isAnyProp,
  isUnknownProp,
  isObjectLikeProp,
  isIndexProp,
  StringProp,
  TypeProp,
  JSDocInfoType,
  UnionProp,
  ArrayProp,
  hasGenerics,
  isArrayProp,
  EnumProp,
  TupleProp,
  ObjectProp,
  RestProp,
  isFunctionProp,
} from './utils';
import {
  isVariableLikeDeclaration,
  isObjectTypeDeclaration,
  isHasType,
  tsKindToPropKind,
  isGenericsType,
  FunctionLike,
  isFunctionLike,
  isArrayLike,
} from './ts-utils';
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

export class SymbolParser {
  private checker: ts.TypeChecker;
  constructor(checker: ts.TypeChecker) {
    this.checker = checker;
  }

  extendProperties(parent: PropType, properties: PropType[]): PropType[] {
    if (isObjectLikeProp(parent) && parent.properties) {
      const prantProps = parent.properties;
      delete parent.properties;
      if (parent.type || parent.displayName) {
        prantProps.map(pp => {
          properties.push({ ...pp, parent });
        });
      } else {
        properties.push(...prantProps);
      }
    } else {
      properties.push(parent);
    }
    return properties;
  }
  parseProperties(
    properties: ts.NodeArray<
      | ts.ClassElement
      | ts.ObjectLiteralElementLike
      | ts.TypeElement
      | ts.TypeNode
      | ts.HeritageClause
      | ts.EnumMember
      | ts.ArrayBindingElement
      | ts.ParameterDeclaration
      | ts.TypeParameterDeclaration
    >,
    types: PropType[] = [],
  ): PropType[] {
    const results: PropType[] = [...types];
    const addProp = (prop: PropType) => {
      const existingIdx = types.findIndex(
        p => prop.displayName && p.displayName === prop.displayName,
      );
      if (existingIdx >= 0) {
        results[existingIdx] = { ...results[existingIdx], ...prop };
      } else {
        results.push(prop);
      }
    };

    properties.forEach(p => {
      if (
        !ts.isTypeNode(p) &&
        !ts.isOmittedExpression(p) &&
        !ts.isHeritageClause(p) &&
        p.name
      ) {
        const symbol = this.checker.getSymbolAtLocation(p.name);
        if (symbol) {
          const prop = this.parseNamedSymbol(symbol);
          addProp(prop);
        }
      } else {
        const propType = this.withJsDocNode({}, p);
        const propValue = this.parseValue(propType, p);
        addProp(propValue);
      }
    });
    return results;
  }
  parseFunction(prop: PropType, node: FunctionLike): PropType {
    prop.kind = tsKindToPropKind[node.kind];
    if (isFunctionProp(prop)) {
      prop.parameters = this.parseProperties(node.parameters);
      if (node.type) {
        prop.returns = this.withJsDocNode({}, node.type);
      }
      if (node.typeParameters?.length) {
        prop.types = this.parseProperties(node.typeParameters);
      }
    }
    return prop;
  }

  parseValue(prop: PropType, node?: ts.Node): PropType {
    if (node) {
      if (isFunctionLike(node)) {
        return this.parseFunction(prop, node);
      } else if (
        ts.isArrayBindingPattern(node) ||
        ts.isArrayLiteralExpression(node)
      ) {
        prop.kind = PropKind.Array;
        if (isArrayProp(prop)) {
          prop.value = this.parseProperties(
            node.elements as ts.NodeArray<ts.ArrayBindingElement>,
          );
        }
      } else if (ts.isNewExpression(node)) {
        prop.kind = PropKind.Object;
        // const symbol = this.checker.getSymbolAtLocation(node.expression);
        // if (symbol) {
        //   (prop as ObjectProp).reference = this.parseNamedSymbol(symbol);
        // }
        if (node.arguments) {
          (prop as ObjectProp).properties = this.parseProperties(
            node.arguments as ts.NodeArray<ts.ArrayBindingElement>,
          );
        }
      } else if (ts.isNumericLiteral(node)) {
        if (!prop.kind) {
          prop.kind = PropKind.Number;
        }
        if (node.text && isNumberProp(prop)) {
          prop.value = Number(node.text);
        }
      } else if (ts.isStringLiteral(node)) {
        if (!prop.kind) {
          prop.kind = PropKind.String;
        }
        if (node.text) {
          (prop as StringProp).value = node.text;
        }
      } else if (node.kind === ts.SyntaxKind.FalseKeyword) {
        if (!prop.kind) {
          prop.kind = PropKind.Boolean;
        }
        (prop as BooleanProp).value = false;
      } else if (node.kind === ts.SyntaxKind.TrueKeyword) {
        if (!prop.kind) {
          prop.kind = PropKind.Boolean;
        }
        (prop as BooleanProp).value = true;
      } else if (node.kind === ts.SyntaxKind.BooleanKeyword) {
        if (!prop.kind) {
          prop.kind = PropKind.Boolean;
        }
        (prop as BooleanProp).value = Boolean(
          (node as ts.LiteralLikeNode).text,
        );
      } else if (isAnyProp(prop)) {
        if (typeof (node as ts.LiteralLikeNode)?.text !== 'undefined') {
          prop.kind = PropKind.Undefined;
          prop.value = (node as ts.LiteralLikeNode).text;
        }
      } else if (isUnknownProp(prop)) {
        prop.kind = PropKind.Unknown;
        if (typeof (node as ts.LiteralLikeNode)?.text !== 'undefined') {
          prop.value = strToValue((node as ts.LiteralLikeNode)?.text);
        }
      } else if (isObjectLikeProp(prop)) {
        if (ts.isObjectLiteralExpression(node)) {
          prop.properties = this.parseProperties(
            node.properties,
            prop.properties,
          );
        }
      }
    }
    return prop;
  }
  parseType(prop: PropType, node?: ts.Node): PropType {
    if (node) {
      if (isFunctionLike(node)) {
        return this.parseFunction(prop, node);
      } else if (isArrayLike(node)) {
        prop.kind = PropKind.Array;

        if (ts.isArrayTypeNode(node)) {
          (prop as ArrayProp).elements = [this.parseType({}, node.elementType)];
        } else if (ts.isTypeReferenceNode(node) && node.typeArguments?.length) {
          (prop as ArrayProp).elements = this.parseProperties(
            node.typeArguments,
          );
        }
      } else if (ts.isIndexSignatureDeclaration(node)) {
        prop.kind = PropKind.Index;
        if (isIndexProp(prop) && node.parameters.length) {
          const symbol = this.checker.getSymbolAtLocation(
            node.parameters[0].name,
          );
          if (symbol) {
            const parsed = this.parseNamedSymbol(symbol);
            prop.index = parsed;
          }
        }
        prop.type = this.withJsDocNode({}, node.type);
      } else if (isHasType(node) && node.type) {
        if (node.type?.kind && tsKindToPropKind[node.type.kind]) {
          prop.kind = tsKindToPropKind[node.type.kind];
        }
        if (hasGenerics(prop) && isGenericsType(node) && node.typeParameters) {
          prop.generics = this.parseProperties(node.typeParameters);
        }
        return this.withJsDocNode(prop, node.type);
      } else if (ts.isExportAssignment(node)) {
        const symbol = this.checker.getSymbolAtLocation(node.expression);
        if (symbol) {
          return this.parseNamedSymbol(symbol);
        }
      } else if (ts.isExportSpecifier(node)) {
        if (node.propertyName) {
          const symbol = this.checker.getSymbolAtLocation(node.propertyName);
          if (symbol) {
            return this.parseNamedSymbol(symbol);
          }
        }
      } else if (isObjectTypeDeclaration(node)) {
        if (!prop.kind) {
          prop.kind = tsKindToPropKind[node.kind];
        }

        if (isObjectLikeProp(prop)) {
          if (
            hasGenerics(prop) &&
            isGenericsType(node) &&
            !ts.isTypeLiteralNode(node) &&
            node.typeParameters
          ) {
            prop.generics = this.parseProperties(node.typeParameters);
          }

          const properties: PropType[] = this.parseProperties(node.members);
          if (
            (ts.isClassLike(node) || ts.isInterfaceDeclaration(node)) &&
            node.heritageClauses
          ) {
            node.heritageClauses.forEach(h => {
              h.types.forEach(t => {
                const symbol = this.checker.getSymbolAtLocation(t.expression);
                if (symbol) {
                  const parent = this.parseNamedSymbol(symbol);
                  this.extendProperties(parent, properties);
                }
              });
            });
          }
          prop.properties = properties;
        }
      } else if (ts.isIntersectionTypeNode(node)) {
        prop.kind = PropKind.Type;
        const properties: PropType[] = [];
        node.types.forEach(t => {
          const childProp: PropType = {};
          if (tsKindToPropKind[t.kind]) {
            childProp.kind = tsKindToPropKind[t.kind];
          }
          const parent = this.withJsDocNode(childProp, t);
          this.extendProperties(parent, properties);
        });
        (prop as TypeProp).properties = properties;
      } else if (ts.isTypeReferenceNode(node)) {
        if (ts.isQualifiedName(node.typeName)) {
          const parentSymbol = this.checker.getSymbolAtLocation(
            node.typeName.left,
          );
          if (parentSymbol) {
            const parent = this.parseNamedSymbol(parentSymbol);
            if (isObjectLikeProp(parent)) {
              delete parent.properties;
            }
            prop.parent = parent;
          }
        }

        const symbol = this.checker.getSymbolAtLocation(node.typeName);
        if (symbol) {
          const p = this.parseNamedSymbol(symbol);

          const { displayName, ...rest } = p;
          Object.assign(prop, rest);
          if (prop.displayName) {
            prop.type = displayName || p;
          } else {
            prop.displayName = displayName;
          }
        } else {
          prop.type = node.typeName.getText();
        }
        prop.kind = PropKind.Type;
      } else if (ts.isLiteralTypeNode(node)) {
        return this.withJsDocNode(prop, node.literal);
      } else if (ts.isOptionalTypeNode(node)) {
        prop.optional = true;
        return this.withJsDocNode(prop, node.type);
      } else if (ts.isRestTypeNode(node)) {
        prop.kind = PropKind.Rest;
        (prop as RestProp).type = this.withJsDocNode({}, node.type);
      } else if (ts.isUnionTypeNode(node)) {
        prop.kind = PropKind.Union;
        (prop as UnionProp).properties = this.parseProperties(node.types);
      } else if (ts.isEnumDeclaration(node)) {
        prop.kind = PropKind.Enum;
        (prop as EnumProp).properties = this.parseProperties(node.members);
      } else if (ts.isTupleTypeNode(node)) {
        prop.kind = PropKind.Tuple;
        (prop as TupleProp).properties = this.parseProperties(node.elements);
      } else {
        switch (node.kind) {
          case ts.SyntaxKind.NumberKeyword:
            prop.kind = PropKind.Number;
            break;

          case ts.SyntaxKind.StringLiteral:
          case ts.SyntaxKind.StringKeyword:
            prop.kind = PropKind.String;
            break;
          case ts.SyntaxKind.BooleanKeyword:
            prop.kind = PropKind.Boolean;
            break;
          case ts.SyntaxKind.VoidKeyword:
            prop.kind = PropKind.Void;
            break;
          case ts.SyntaxKind.ObjectKeyword:
            prop.kind = PropKind.Object;
            break;
          case ts.SyntaxKind.AnyKeyword:
            prop.kind = PropKind.Any;
            break;
          case ts.SyntaxKind.UnknownKeyword:
            prop.kind = PropKind.Unknown;
            break;
          case ts.SyntaxKind.NullKeyword:
            prop.kind = PropKind.Null;
            break;
          case ts.SyntaxKind.UndefinedKeyword:
            prop.kind = PropKind.Undefined;
            break;
        }
      }
    }
    return prop;
  }

  withJsDocNode(prop: PropType, node?: ts.Node): PropType {
    if (node && 'jsDoc' in node) {
      const { jsDoc } = node as { jsDoc: JSDocInfoType[] };
      const docs: {
        descriptions: string[];
        tags: string[];
      } = jsDoc.reduce(
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
      const allComments = [...docs.descriptions, ...docs.tags].join('\n');
      const typedProp = this.parseType(prop, node);
      const commented = mergeJSDocComments(typedProp, allComments);
      return commented;
    }

    const result = this.parseType(prop, node);
    if (node && ts.isLiteralTypeNode(node)) {
      return this.parseValue(result, node.literal);
    }
    return result;
  }
  private annotateProp(
    symbol: ts.Symbol,
  ): {
    prop: PropType;
    name: string;
    declaration?: ts.Node;
    initializer?: ts.Node;
  } {
    let kind: PropKind | undefined = undefined;

    const typeOfSymbol = this.checker.getTypeOfSymbolAtLocation(
      symbol,
      symbol.valueDeclaration || symbol.declarations[0],
    );
    const typeSymbol = typeOfSymbol.symbol || typeOfSymbol.aliasSymbol;

    const symbolDeclaration = symbol.valueDeclaration || symbol.declarations[0];
    const typeDeclaration = typeSymbol
      ? typeSymbol.valueDeclaration || typeSymbol.declarations[0]
      : undefined;

    const declaration =
      typeDeclaration &&
      (ts.isExportAssignment(symbolDeclaration) ||
        ts.isExportSpecifier(symbolDeclaration))
        ? typeDeclaration
        : symbolDeclaration;
    kind = typeNameToPropKind(this.checker.typeToString(typeOfSymbol));
    const name = symbol.getName();
    const prop: PropType = {};
    if (kind !== undefined) {
      prop.kind = kind;
    }
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
    prop.displayName = name;
    const initializer = isVariableLikeDeclaration(declaration)
      ? declaration?.initializer
      : undefined;
    return { prop, name, declaration, initializer };
  }
  parseNamedSymbol(symbol: ts.Symbol): PropType {
    const { prop, declaration, initializer } = this.annotateProp(symbol);
    const type = this.withJsDocNode(prop, declaration);
    const final = this.parseValue(type, initializer);
    return final;
  }
  parseSymbol(
    symbol: ts.Symbol,
  ): {
    prop: PropType;
    name: string;
  } {
    const comments = symbol
      .getDocumentationComment(this.checker)
      .map(({ text }) => `* ${text}`)
      .join('/n * ');
    const tags = symbol.getJsDocTags().map(t => {
      if (t.text) {
        const firstSpace = t.text.indexOf(' ');
        return `* @${t.name} ${t.text.substr(0, firstSpace)} ${t.text.substr(
          firstSpace + 1,
        )}`;
      }
      return `* @${t.name}`;
    });
    const { prop, name, declaration, initializer } = this.annotateProp(symbol);
    const type = this.parseType(prop, declaration);
    const final = this.parseValue(type, initializer);

    const commented = mergeJSDocComments(final, [comments, tags].join('\n'));
    return { prop: commented, name };
  }
}
