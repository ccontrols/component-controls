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
  IndexProp,
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
  isFunctionBaseType,
  isClassLikeProp,
  getSymbolType,
  ParseOptions,
  defaultParseOptions,
} from './utils';
import {
  isVariableLikeDeclaration,
  isObjectTypeDeclaration,
  isHasType,
  tsKindToPropKind,
  isGenericsType,
  isTypeParameterType,
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

/**
 * internal structure to avoid recursive parsing or parents
 */
type InternalPropType = PropType & {
  parentName?: string;
};

export class SymbolParser {
  private checker: ts.TypeChecker;
  private options: Required<ParseOptions>;
  private refSymbols: { props: PropType[]; symbol: ts.Symbol }[] = [];
  constructor(checker: ts.TypeChecker, options?: ParseOptions) {
    this.checker = checker;
    this.options = {
      ...defaultParseOptions,
      ...options,
    } as Required<ParseOptions>;
  }
  addRefSymbol(prop: PropType, symbol: ts.Symbol): PropType {
    const refSymbol = this.refSymbols.find(r => r.symbol === symbol);
    if (!refSymbol) {
      this.refSymbols.push({ props: [prop], symbol });
    } else {
      refSymbol.props.push(prop);
    }
    return prop;
  }
  getParent(
    prop: InternalPropType,
    node: ts.Node,
  ): PropType | false | undefined {
    let parent = node.parent;
    if (ts.isPropertyAccessExpression(node)) {
      const parentName = node.expression.getText();
      if (!this.options.internalTypes.includes(parentName)) {
        if (parentName === prop.parentName) {
          return false;
        }
        const symbol = this.checker.getSymbolAtLocation(node.expression);
        if (symbol) {
          const parent = this.parseSymbolProp(
            { displayName: parentName },
            symbol,
          );
          return parent;
        }
      }
      return undefined;
    }
    while (parent) {
      if (isTypeParameterType(parent) || ts.isEnumDeclaration(parent)) {
        const parentName = parent.name ? parent.name.getText() : undefined;
        if (!parentName || !this.options.internalTypes.includes(parentName)) {
          if (parentName === prop.parentName) {
            return false;
          }
          const propParent = { displayName: parentName };
          this.parseType(propParent, parent);
          this.mergeNodeComments(propParent, parent);
          return propParent;
        }
        return undefined;
      }
      parent = parent.parent;
    }
    return false;
  }

  parseProperties(
    parent: PropType,
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
    for (const p of properties) {
      if (
        !ts.isTypeNode(p) &&
        !ts.isOmittedExpression(p) &&
        !ts.isHeritageClause(p) &&
        p.name
      ) {
        const name = p.name.getText();
        //locate property overrides.
        //when multiple properties with the same name, symbol returns the same symbol for all of them.
        // thus can not get their properties and comments
        const numProps = properties.filter(
          f => (f as ts.TypeElement).name?.getText() === name,
        );
        if (numProps.length <= 1) {
          const symbol = this.checker.getSymbolAtLocation(p.name);
          if (symbol) {
            const prop = this.addRefSymbol({}, symbol);
            if (parent.displayName) {
              (prop as InternalPropType).parentName = parent.displayName;
            }
            results.push(prop);
            continue;
          }
        }
      }
      const prop = this.parseTypeValueComments({}, p, p);
      results.push(prop);
    }
    return results;
  }
  parseFunction(prop: PropType, node: FunctionLike): PropType {
    prop.kind = tsKindToPropKind[node.kind];
    if (isFunctionBaseType(prop)) {
      if (node.parameters.length && !prop.parameters) {
        prop.parameters = this.parseProperties(prop, node.parameters);
      }
      if (node.type && !prop.returns) {
        const returns = this.parseTypeValueComments({}, node.type);
        prop.returns = returns;
      }
      if (node.typeParameters?.length && !prop.types) {
        prop.types = this.parseProperties(prop, node.typeParameters);
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
            prop,
            node.elements as ts.NodeArray<ts.ArrayBindingElement>,
          );
        }
      } else if (ts.isNewExpression(node)) {
        prop.kind = PropKind.Object;
        if (node.arguments) {
          (prop as ObjectProp).properties = this.parseProperties(
            prop,
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
        if ('text' in node) {
          (prop as BooleanProp).value = Boolean(
            (node as ts.LiteralLikeNode).text,
          );
        }
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
            prop,
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
          const element = this.parseType({}, node.elementType);
          (prop as ArrayProp).elements = [element];
        } else if (ts.isTypeReferenceNode(node) && node.typeArguments?.length) {
          (prop as ArrayProp).elements = this.parseProperties(
            prop,
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
            const parsed = this.addRefSymbol({}, symbol);
            prop.index = parsed;
          }
        }
        const type = this.parseTypeValueComments({}, node.type);
        prop.type = type;
      } else if (isHasType(node) && node.type) {
        if (node.type?.kind && tsKindToPropKind[node.type.kind]) {
          prop.kind = tsKindToPropKind[node.type.kind];
        }
        if (hasGenerics(prop) && isGenericsType(node) && node.typeParameters) {
          prop.generics = this.parseProperties(prop, node.typeParameters);
        }
        this.parseTypeValueComments(prop, node.type);
      } else if (ts.isExportAssignment(node)) {
        const symbol = this.checker.getSymbolAtLocation(node.expression);
        if (symbol) {
          return this.addRefSymbol(prop, symbol);
        }
      } else if (ts.isExportSpecifier(node)) {
        if (node.propertyName) {
          prop.displayName = node.propertyName.getText();
          const symbol = this.checker.getSymbolAtLocation(node.propertyName);
          if (symbol) {
            return this.addRefSymbol(prop, symbol);
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
            prop.generics = this.parseProperties(prop, node.typeParameters);
          }

          const properties: PropType[] = this.parseProperties(
            prop,
            node.members,
          );
          if (
            (ts.isClassLike(node) || ts.isInterfaceDeclaration(node)) &&
            node.heritageClauses?.length
          ) {
            let extendsProp: string[] | undefined = undefined;
            if (isClassLikeProp(prop)) {
              extendsProp = [];
            }
            node.heritageClauses.forEach(h => {
              h.types.forEach(t => {
                if (extendsProp) {
                  extendsProp.push(t.expression.getText());
                }
              });
            });
            if (isClassLikeProp(prop)) {
              prop.extends = extendsProp;
            }
          }
          prop.properties = properties;
        }
      } else if (ts.isTypeReferenceNode(node)) {
        let type: PropType | string | undefined;
        const symbol = this.checker.getSymbolAtLocation(node.typeName);
        if (
          symbol &&
          symbol.escapedName &&
          !this.options.internalTypes.includes(symbol.escapedName)
        ) {
          this.addRefSymbol(prop, symbol);
        } else {
          const name = node.getText();
          if (typeof type === 'string' && !prop.displayName) {
            prop.displayName = name;
          } else {
            prop.type = name;
          }
        }
        if (node.typeArguments?.length && hasGenerics(prop)) {
          prop.generics = this.parseProperties(prop, node.typeArguments);
        }
        prop.kind = PropKind.Type;
      } else if (ts.isIntersectionTypeNode(node)) {
        prop.kind = PropKind.Type;
        const properties: PropType[] = [];
        node.types.forEach(t => {
          if (ts.isTypeLiteralNode(t)) {
            const childProp: PropType = {};

            if (tsKindToPropKind[t.kind]) {
              childProp.kind = tsKindToPropKind[t.kind];
            }

            this.parseTypeValueComments(childProp, t);
            if (isClassLikeProp(childProp) && childProp.properties) {
              properties.push(...childProp.properties);
            }
          }
        });
        (prop as TypeProp).properties = properties;
      } else if (ts.isLiteralTypeNode(node)) {
        this.parseTypeValueComments(prop, node.literal);
      } else if (ts.isTypeLiteralNode(node)) {
        prop.kind = PropKind.Type;
        if (node.members.length) {
          (prop as TypeProp).properties = this.parseProperties(
            prop,
            node.members,
          );
        }
      } else if (ts.isOptionalTypeNode(node)) {
        prop.optional = true;
        this.parseTypeValueComments(prop, node.type);
      } else if (ts.isRestTypeNode(node)) {
        prop.kind = PropKind.Rest;
        const type = this.parseTypeValueComments({}, node.type);
        prop.type = type;
      } else if (ts.isUnionTypeNode(node)) {
        prop.kind = PropKind.Union;
        (prop as UnionProp).properties = this.parseProperties(prop, node.types);
      } else if (ts.isEnumDeclaration(node)) {
        prop.kind = PropKind.Enum;
        (prop as EnumProp).properties = this.parseProperties(
          prop,
          node.members,
        );
      } else if (ts.isEnumMember(node)) {
        const parent = this.getParent(prop, node);
        if (parent) {
          prop.parent = parent;
        }
      } else if (ts.isTupleTypeNode(node)) {
        prop.kind = PropKind.Tuple;
        (prop as TupleProp).properties = this.parseProperties(
          prop,
          node.elements,
        );
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

  private parseSymbolProp(
    prop: PropType,
    symbol: ts.Symbol,
    top?: boolean,
  ): PropType {
    let kind: PropKind | undefined = undefined;
    const symbolDeclaration =
      symbol.valueDeclaration || symbol.declarations?.[0];
    if (symbolDeclaration) {
      const symbolType = getSymbolType(this.checker, symbol);

      const typeSymbol = symbolType
        ? symbolType.aliasSymbol || symbolType.symbol
        : undefined;

      const typeDeclaration = typeSymbol
        ? typeSymbol.valueDeclaration || typeSymbol.declarations[0]
        : undefined;

      const declaration =
        typeDeclaration &&
        (ts.isExportAssignment(symbolDeclaration) ||
          ts.isExportSpecifier(symbolDeclaration))
          ? typeDeclaration
          : symbolDeclaration;
      if (symbolType) {
        kind = typeNameToPropKind(this.checker.typeToString(symbolType));
      }

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
      //unnamed type literal
      if ('name' in declaration) {
        const namedDeclaration = declaration as ts.NamedDeclaration;
        if (namedDeclaration.name) {
          prop.displayName = namedDeclaration.name.getText();
        }
      }
      const initializer = isVariableLikeDeclaration(declaration)
        ? declaration?.initializer
        : ts.isBinaryExpression(declaration.parent)
        ? declaration.parent.right
        : undefined;
      if (symbolType) {
        const resolvedType = this.options.typeResolver({
          symbolType,
          declaration,
          checker: this.checker,
        });
        if (
          resolvedType &&
          resolvedType.flags & (ts.TypeFlags.Object | ts.TypeFlags.Intersection)
        ) {
          const resolvedSymbol =
            resolvedType.symbol || resolvedType.aliasSymbol;
          const resolvedDeclaration = resolvedSymbol
            ? resolvedSymbol.valueDeclaration ||
              resolvedSymbol.declarations?.[0]
            : undefined;
          if (resolvedDeclaration) {
            const aProps = resolvedType.getApparentProperties();
            const properties = aProps
              .map(s => {
                const d = s.valueDeclaration || s.declarations?.[0];
                const parent = this.getParent(
                  { parentName: prop.displayName } as InternalPropType,
                  d,
                );
                if (parent !== undefined) {
                  const p = this.parseSymbolProp(
                    { parentName: prop.displayName } as InternalPropType,
                    s,
                    top,
                  );
                  if (p) {
                    delete (p as InternalPropType).parentName;
                    if (parent && parent.displayName) {
                      const parentName = parent.displayName;
                      p.parent = parentName;
                      if (!prop.propParents) {
                        prop.propParents = {};
                      }
                      if (!prop.propParents[parentName]) {
                        prop.propParents[parentName] = parent;
                      }
                    }
                    return p;
                  }
                }
                return undefined;
              })
              .filter(p => p) as PropType[];
            const stringIndex = resolvedType.getStringIndexType();
            if (stringIndex) {
              const indexProp = {
                kind: PropKind.Index,
                index: {
                  kind: PropKind.String,
                },
              } as IndexProp;
              if (stringIndex.symbol) {
                indexProp.type = this.parseSymbolProp({}, stringIndex.symbol);
              }
              properties.unshift(indexProp);
            }
            const numberIndex = resolvedType.getNumberIndexType();
            if (numberIndex) {
              const indexProp = {
                kind: PropKind.Index,
                index: {
                  kind: PropKind.Number,
                },
              } as IndexProp;
              if (numberIndex.symbol) {
                indexProp.type = this.parseSymbolProp({}, numberIndex.symbol);
              }
              properties.unshift(indexProp);
            }
            const callSignatures = resolvedType.getCallSignatures();
            if (callSignatures?.length) {
              const fnDeclaration = callSignatures[0].declaration;
              if (fnDeclaration && isFunctionLike(fnDeclaration)) {
                this.parseFunction(prop, fnDeclaration);
              }
            }
            const kind =
              tsKindToPropKind[
                resolvedDeclaration?.kind || ts.SyntaxKind.TypeAliasDeclaration
              ] || PropKind.Type;
            prop.kind = kind;

            if (properties.length) {
              (prop as TypeProp).properties = properties;
            }
            const aliasDeclaration = typeSymbol
              ? typeSymbol.valueDeclaration || typeSymbol.declarations?.[0]
              : undefined;
            if (
              aliasDeclaration &&
              isTypeParameterType(aliasDeclaration) &&
              aliasDeclaration.typeParameters?.length
            ) {
              (prop as TypeProp).generics = this.parseProperties(
                prop,
                aliasDeclaration.typeParameters,
              );
            }
            //any initializer values
            this.parseValue(prop, initializer);

            prop = top
              ? this.mergeSymbolComments(prop, symbol)
              : this.mergeNodeComments(prop, declaration);
            return prop;
          }
        }
      }
      this.parseTypeValue(prop, declaration, initializer);
      prop = top
        ? this.mergeSymbolComments(prop, symbol)
        : this.mergeNodeComments(prop, declaration);
      return prop;
    }
    return prop;
  }

  private mergeNodeComments(prop: PropType, node?: ts.Node): PropType {
    if (node && 'jsDoc' in node) {
      const { jsDoc } = node as {
        jsDoc: JSDocInfoType[];
      };
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
                const text = name?.getText();
                return `* @${tagName.text}${`${text ? ` ${text}` : ''}`}${
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

      Object.assign(prop, mergeJSDocComments(prop, allComments));
    }
    return prop;
  }
  parseTypeValue(
    prop: PropType,
    declaration?: ts.Node,
    initializer?: ts.Node,
  ): PropType {
    this.parseType(prop, declaration);
    if (declaration && ts.isLiteralTypeNode(declaration)) {
      this.parseValue(prop, declaration.literal);
    }
    this.parseValue(prop, initializer);
    return prop;
  }
  parseTypeValueComments(
    prop: PropType,
    declaration?: ts.Node,
    initializer?: ts.Node,
  ): PropType {
    this.parseTypeValue(prop, declaration, initializer);
    this.mergeNodeComments(prop, declaration);
    return prop;
  }

  private resolveRefTypes = () => {
    let i = 0;
    while (i < 5) {
      const chachedSymbols = this.refSymbols.filter(r => r.props.length);
      if (!chachedSymbols.length) {
        break;
      }
      chachedSymbols.forEach(ref => {
        const { props, symbol } = ref;
        ref.props = [];
        props.forEach(prop => {
          const p = this.parseSymbolProp({}, symbol);
          //remove internal parent tracking field
          delete (prop as InternalPropType).parentName;
          if (p) {
            const { displayName, ...rest } = p;
            const type: PropType | string | undefined = Object.keys(rest).length
              ? p
              : displayName;

            if (typeof type === 'string') {
              if (prop.displayName && prop.displayName !== type) {
                prop.type = type;
              } else {
                prop.displayName = type;
              }
            } else {
              Object.assign(prop, rest);
              if (!isObjectLikeProp(prop) && prop.displayName) {
                if (!prop.type && prop.displayName !== displayName) {
                  prop.type = displayName;
                }
              } else {
                prop.displayName = displayName;
              }
            }
          }
        });
      });
      i += 1;
    }
  };

  private mergeSymbolComments(prop: PropType, symbol: ts.Symbol): PropType {
    const comments = symbol
      .getDocumentationComment(this.checker)
      .map(({ text }) => `* ${text}`);
    const tags = symbol.getJsDocTags().map(t => {
      if (t.text) {
        const firstSpace = t.text.indexOf(' ');
        return `* @${t.name} ${t.text.substr(0, firstSpace)} ${t.text.substr(
          firstSpace + 1,
        )}`;
      }
      return `* @${t.name}`;
    });
    Object.assign(
      prop,
      mergeJSDocComments(prop, [...comments, ...tags].join('\n')),
    );
    return prop;
  }
  parseSymbol(symbol: ts.Symbol): PropType {
    const prop = this.parseSymbolProp({}, symbol, true);
    this.resolveRefTypes();
    return prop;
  }
}
