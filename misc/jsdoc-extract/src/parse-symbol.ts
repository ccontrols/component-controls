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
} from './utils';
import {
  isVariableLikeDeclaration,
  isObjectTypeDeclaration,
  isHasType,
  tsKindToPropKind,
  isGenericsType,
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

  parseProperties(
    properties: ts.NodeArray<
      | ts.ClassElement
      | ts.ObjectLiteralElementLike
      | ts.TypeElement
      | ts.TypeNode
      | ts.ArrayBindingElement
      | ts.ParameterDeclaration
      | ts.TypeParameterDeclaration
    >,
    types: PropType[] = [],
  ): PropType[] {
    const results: PropType[] = [...types];
    const addProp = (prop: PropType) => {
      const existingIdx = results.findIndex(
        p => p.displayName === prop.displayName,
      );
      if (existingIdx >= 0) {
        results[existingIdx] = { ...results[existingIdx], ...prop };
      } else {
        results.push(prop);
      }
    };
    properties.forEach(p => {
      if (!ts.isTypeNode(p) && !ts.isOmittedExpression(p) && p.name) {
        const symbol = this.checker.getSymbolAtLocation(p.name);
        if (symbol) {
          const { prop } = this.parseSymbol(symbol);
          addProp(prop);
        }
      } else {
        const prop = this.withJsDocNode({}, p);
        addProp(prop);
      }
    });
    return results;
  }
  parseValue(prop: PropType, node?: ts.Node): PropType {
    if (node) {
      if (ts.isArrayBindingPattern(node) && isArrayProp(prop)) {
        prop.value = this.parseProperties(node.elements);
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
      if (
        ts.isArrayTypeNode(node) ||
        ts.isArrayLiteralExpression(node) ||
        (ts.isTypeReferenceNode(node) && node.typeName.getText() === 'Array')
      ) {
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
            const { prop: parsed } = this.parseSymbol(symbol);
            prop.index = parsed;
          }
        }
        return this.withJsDocNode(prop, node.type);
      } else if (isHasType(node)) {
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
        } else {
        }
      } else if (isObjectTypeDeclaration(node)) {
        if (isObjectLikeProp(prop)) {
          prop.properties = this.parseProperties(node.members);
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
        });
        (prop as TypeProp).properties = properties;
      } else if (ts.isTypeReferenceNode(node)) {
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
      } else if (ts.isUnionTypeNode(node)) {
        prop.kind = PropKind.Union;
        (prop as UnionProp).properties = this.parseProperties(node.types);
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

      return mergeJSDocComments(
        this.parseType(prop, node),
        [...docs.descriptions, ...docs.tags].join('\n'),
      );
    }
    return this.parseType(prop, node);
  }
  parseNamedSymbol(symbol: ts.Symbol): PropType {
    const { name, prop } = this.parseSymbol(symbol);
    return { ...prop, displayName: name };
  }
  parseSymbol(
    symbol: ts.Symbol,
  ): {
    prop: PropType;
    name: string;
  } {
    const declaration = symbol.valueDeclaration || symbol.declarations[0];
    const comments = symbol
      .getDocumentationComment(this.checker)
      .map(({ text }) => `* ${text}`)
      .join('/n * ');
    const tags = symbol
      .getJsDocTags()
      .map(t => {
        if (t.text) {
          const firstSpace = t.text.indexOf(' ');
          return `* @${t.name} ${t.text.substr(0, firstSpace)} ${t.text.substr(
            firstSpace + 1,
          )}`;
        }
        return undefined;
      })
      .filter(t => t);

    const initializer = isVariableLikeDeclaration(declaration)
      ? declaration?.initializer
      : undefined;
    let kind: PropKind | undefined = undefined;
    const typeDeclared = this.checker.getDeclaredTypeOfSymbol(symbol);
    if (!(typeDeclared.flags & ts.TypeFlags.Any)) {
      kind = typeNameToPropKind(
        this.checker.typeToString(typeDeclared, declaration),
      );
    } else {
      const typeSymbol = this.checker.getTypeOfSymbolAtLocation(
        symbol,
        declaration,
      );
      kind = typeNameToPropKind(this.checker.typeToString(typeSymbol));
    }
    const name = symbol.getName();
    const result: PropType = {};
    if (kind !== undefined) {
      result.kind = kind;
    }
    if ((declaration as ts.ParameterDeclaration).questionToken) {
      result.optional = true;
    }
    if (declaration.modifiers) {
      for (const m of declaration.modifiers) {
        if (m.kind === ts.SyntaxKind.PrivateKeyword) {
          result.visibility = 'private';
        } else if (m.kind === ts.SyntaxKind.ProtectedKeyword) {
          result.visibility = 'protected';
        } else if (m.kind === ts.SyntaxKind.PublicKeyword) {
          result.visibility = 'public';
        } else if (m.kind === ts.SyntaxKind.StaticKeyword) {
          result.static = true;
        } else if (m.kind === ts.SyntaxKind.ReadonlyKeyword) {
          result.readonly = true;
        } else if (m.kind === ts.SyntaxKind.AbstractKeyword) {
          result.abstract = true;
        }
      }
    }
    if (name) {
      result.displayName = name;
    }
    const type = this.parseType(result, declaration);
    const final = this.parseValue(type, initializer);

    const prop = mergeJSDocComments(final, [comments, tags].join('\n'));
    return { prop, name };
  }
}
