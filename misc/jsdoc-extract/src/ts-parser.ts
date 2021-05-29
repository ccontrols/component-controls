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

const symbolName = (node: ts.Symbol): string => {
  return node.getName();
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
    if (ts.isArrayTypeNode(node) || ts.isArrayLiteralExpression(node)) {
      result.type = 'array';
      if (ts.isArrayTypeNode(node)) {
        result.properties = [getElementType(checker, {}, node.elementType)];
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
              getElementType(checker, {}, t.expression, t.expression),
            ),
          ];
        }, [] as JSDocType[]);
      }

      result.properties = node.members.map(
        m =>
          (m.name &&
            parseSymbol(checker, checker.getSymbolAtLocation(m.name))) ||
          getElementType(checker, {}, m),
      );
      if (node.typeParameters?.length) {
        result.parameters = node.typeParameters.map(
          m =>
            (m.name &&
              parseSymbol(checker, checker.getSymbolAtLocation(m.name))) ||
            getElementType(checker, {}, m),
        );
      }
    } else if (ts.isIndexSignatureDeclaration(node)) {
      result.type = 'index';
      if (node.modifiers?.find(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) {
        result.readonly = true;
      }
      result.parameters = [getElementType(checker, {}, node.type)];
      result.properties = node.parameters.map(m =>
        getElementType(checker, {}, m),
      );
    } else if (ts.isIntersectionTypeNode(node)) {
      result.type = 'type';
      result.properties = node.types.map(m => getElementType(checker, {}, m));
    } else if (ts.isTypeLiteralNode(node)) {
      result.type = 'type';
      result.properties = node.members.map(
        m =>
          (m.name &&
            parseSymbol(checker, checker.getSymbolAtLocation(m.name))) ||
          getElementType(checker, {}, m),
      );
    } else if (ts.isTypeAliasDeclaration(node)) {
      result.type = 'type';
      result.returns = getElementType(checker, {}, node.type);
    } else if (ts.isUnionTypeNode(node)) {
      result.type = 'union';
      result.properties = node.types.map(m =>
        getElementType(checker, {}, m, (m as ts.LiteralTypeNode).literal),
      );
    } else if (ts.isTypeReferenceNode(node)) {
      result.type = 'reference';
      result.name = node.typeName.getText();
      if (node.typeArguments?.length) {
        result.parameters = node.typeArguments.map(m =>
          getElementType(checker, {}, m),
        );
      }
    } else if (ts.isLiteralTypeNode(node)) {
      result = getElementType(checker, result, node.literal, node.literal);
    } else if (ts.isIdentifier(node)) {
      result.type = 'reference';
      result.name = node.text;
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
    } else if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node)) {
      if (node.questionToken) {
        result.optional = true;
      }
      result.type = 'function';
      result.parameters = node.parameters.map(
        m =>
          (m.name &&
            parseSymbol(checker, checker.getSymbolAtLocation(m.name))) ||
          getElementType(checker, {}, m.type),
      );
      if (node.type) {
        result.returns = getElementType(checker, {}, node.type);
      }
      if (node.typeParameters?.length) {
        result.properties = node.typeParameters.map(
          m =>
            (m.name &&
              parseSymbol(checker, checker.getSymbolAtLocation(m.name))) ||
            getElementType(checker, {}, m),
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
        case ts.SyntaxKind.ClassDeclaration:
          result.type = 'class';
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
        result.value = initializer.properties.map(
          m =>
            m.name && parseSymbol(checker, checker.getSymbolAtLocation(m.name)),
        );
      }
    }
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
  const declaration = symbol.declarations.length
    ? (symbol.declarations[0] as ts.VariableDeclaration)
    : undefined;
  const result = getElementType(
    checker,
    {
      name: symbolName(symbol),
    },
    symbol.valueDeclaration || declaration,
    declaration?.initializer,
  );
  const descriptions = symbol.getDocumentationComment(checker);
  const tags = symbol.getJsDocTags();
  const jsDoc = [
    ...descriptions.map(({ text }) => `* ${text}`),
    ...tags.map(tag => `* @${tag.name}${tag.text ? ` ${tag.text}` : ''}`),
  ].join('\n');
  const withJsDoc = mergeJSDocComments(result, jsDoc);
  /**
   * workaround typescript compiler assigns jsdoc to function params + to the function itself
   */
  return result.parameters !== withJsDoc.parameters &&
    result.type !== 'function'
    ? result
    : withJsDoc;
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
