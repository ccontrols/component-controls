import * as ts from 'typescript';
import { JSDocType } from './utils';
import { mergeJSDocComments } from './jsdoc-parse';
const isNodeExported = (node: ts.Node): boolean => {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) &
      ts.ModifierFlags.Export) !==
      0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
};

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
const getVisit = (checker: ts.TypeChecker, symbols: ts.Symbol[]) => {
  const visit = (node: ts.Node): void => {
    // Only consider exported nodes
    if (!isNodeExported(node)) {
      return;
    }
    if (ts.isVariableStatement(node)) {
      const declarationList = node.declarationList;
      const declaration =
        declarationList.declarations.length && declarationList.declarations[0];
      const symbol =
        declaration && checker.getSymbolAtLocation(declaration.name);
      if (symbol) {
        symbols.push(symbol);
      }
    } else if (
      (ts.isClassDeclaration(node) ||
        ts.isTypeAliasDeclaration(node) ||
        ts.isFunctionDeclaration(node) ||
        ts.isArrowFunction(node) ||
        ts.isInterfaceDeclaration(node)) &&
      node.name
    ) {
      // This is a top level class, get its symbol
      const symbol = checker.getSymbolAtLocation(node.name);
      if (symbol) {
        symbols.push(symbol);
      }
      // No need to walk any further, class expressions/inner declarations
      // cannot be exported
    } else if (ts.isModuleDeclaration(node)) {
      // This is a namespace, visit its children
      ts.forEachChild(node, visit);
    }
  };
  return visit;
};

const getElementType = (
  checker: ts.TypeChecker,
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
        result.properties = [getElementType(checker, {}, node.elementType)];
      } else if (ts.isTypeReferenceNode(node) && node.typeArguments?.length) {
        result.properties = node.typeArguments.map(m =>
          getElementType(checker, {}, m),
        );
      }
      if (initializer) {
        result.value = (initializer as ts.ArrayBindingPattern).elements.map(m =>
          getElementType(checker, {}, m, m),
        );
      }
    } else if (ts.isInterfaceDeclaration(node)) {
      result.type = 'interface';
      if (node.heritageClauses?.length) {
        result.inherits = node.heritageClauses.reduce((acc, h) => {
          return [
            ...acc,
            ...h.types.map(t =>
              getElementType(
                checker,
                { type: 'reference' },
                t.expression,
                t.expression,
              ),
            ),
          ];
        }, [] as JSDocType[]);
      }

      result.properties = node.members.map(m => parseNode(checker, {}, m));
      if (node.typeParameters?.length) {
        result.parameters = node.typeParameters.map(m =>
          parseNode(checker, {}, m),
        );
      }
    } else if (ts.isClassDeclaration(node)) {
      result.type = 'class';
      result.properties = node.members.map(m => {
        return parseNode(checker, {}, m);
      });
    } else if (ts.isIndexSignatureDeclaration(node)) {
      result.type = 'index';
      if (node.modifiers?.find(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) {
        result.readonly = true;
      }
      result.parameters = [getElementType(checker, {}, node.type)];
      result.properties = node.parameters.map(m =>
        getElementType(checker, {}, m),
      );
    } else if (ts.isConstructorDeclaration(node)) {
      result.name = 'constructor';
      result.fnType = 'constructor';
      result.type = 'function';
      result.parameters = node.parameters.map(m => parseNode(checker, {}, m));
    } else if (ts.isGetAccessor(node) || ts.isSetAccessor(node)) {
      result.type = 'function';
      result.fnType = ts.isSetAccessor(node) ? 'setter' : 'getter';
      result.parameters = node.parameters.map(m => parseNode(checker, {}, m));
    } else if (ts.isIntersectionTypeNode(node)) {
      result.type = 'type';
      result.properties = node.types.map(m => getElementType(checker, {}, m));
    } else if (ts.isTypeLiteralNode(node)) {
      result.type = 'type';
      result.properties = node.members.map(m => parseNode(checker, {}, m));
    } else if (ts.isTypeAliasDeclaration(node)) {
      result.type = 'type';
      result.returns = getElementType(checker, {}, node.type);
    } else if (ts.isOptionalTypeNode(node)) {
      result.optional = true;
      result = getElementType(checker, result, node.type);
    } else if (ts.isUnionTypeNode(node)) {
      result.type = 'union';
      result.properties = node.types.map(m =>
        getElementType(checker, {}, m, (m as ts.LiteralTypeNode).literal),
      );
    } else if (ts.isTupleTypeNode(node)) {
      result.type = 'tuple';
      result.properties = node.elements.map(m =>
        getElementType(checker, {}, m),
      );
    } else if (ts.isTypeReferenceNode(node)) {
      result.type = 'reference';
      result = parseNode(checker, result, node.typeName, initializer);
      if (node.typeArguments?.length) {
        result.parameters = node.typeArguments.map(m =>
          getElementType(checker, {}, m),
        );
      }
    } else if (ts.isLiteralTypeNode(node)) {
      result = getElementType(checker, result, node.literal, node.literal);
    } else if (ts.isRestTypeNode(node)) {
      result.type = 'rest';
      result.returns = getElementType(checker, result, node.type);
    } else if (
      ts.isTypeOperatorNode(node) ||
      ts.isParenthesizedTypeNode(node)
    ) {
      result = getElementType(checker, result, node.type);
    } else if (ts.isIdentifier(node)) {
      result.value = node.text;
    } else if (ts.isNewExpression(node)) {
      result.type = 'object';
      result.parameters = [
        getElementType(checker, { type: 'reference' }, node.expression),
      ];
      if (node.arguments) {
        result.properties = node.arguments.map(m =>
          getElementType(checker, {}, m, m),
        );
      }
    } else if (ts.isVariableDeclaration(node)) {
      result = getElementType(checker, result, node.type, node.initializer);
    } else if (ts.isPropertySignature(node) || ts.isParameter(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      if (node.modifiers?.find(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) {
        result.readonly = true;
      }
      result = getElementType(checker, result, node.type, node.initializer);
    } else if (ts.isPropertyAssignment(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      result = getElementType(
        checker,
        result,
        node.initializer,
        node.initializer,
      );
    } else if (ts.isPropertyDeclaration(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      if (node.modifiers?.find(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) {
        result.readonly = true;
      }
      result = getElementType(checker, result, node.type, node.initializer);
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
      result.parameters = node.parameters.map(m => {
        return parseNode(checker, {}, m, m.initializer);
      });
      if (node.type) {
        result.returns = getElementType(checker, {}, node.type);
      }
      if (node.typeParameters?.length) {
        result.properties = node.typeParameters.map(m =>
          parseNode(checker, {}, m),
        );
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
          result.value = strToValue((initializer as ts.LiteralLikeNode)?.text);
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
      if (initializer && ts.isObjectLiteralExpression(initializer)) {
        result.value = initializer.properties.map(m =>
          parseNode(checker, {}, m),
        );
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
const parseNode = (
  checker: ts.TypeChecker,
  defaults: JSDocType,
  node: ts.NamedDeclaration & {
    jsDoc?: JSDocInfoType[];
  },
  initializer?: ts.Node,
  jsDocsDefaults?: JSDocInfoType[],
): JSDocType => {
  const updated = { ...defaults };
  if (node.name?.text) {
    updated.name = node.name?.text;
  }
  const result = getElementType(checker, updated, node, initializer);
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

const parseSymbol = (
  checker: ts.TypeChecker,
  symbol?: ts.Symbol,
): JSDocType | undefined => {
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
  return parseNode(checker, {}, declaration, declaration?.initializer, [
    { comment: comments.join('/n * '), tags },
  ]);
};
export const tsParser = (
  fileName: string,
  options: ts.CompilerOptions,
): Record<string, JSDocType> => {
  const program = ts.createProgram([fileName], options);

  // Get the checker, we will use it to find more about classes
  const checker = program.getTypeChecker();
  const symbols: ts.Symbol[] = [];

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree to search for classes
      ts.forEachChild(sourceFile, getVisit(checker, symbols));
    }
  }
  const results: Record<string, JSDocType> = {};
  for (const symbol of symbols) {
    const result = parseSymbol(checker, symbol);
    if (result) {
      results[result.name as string] = result;
    }
  }
  return results;
};
