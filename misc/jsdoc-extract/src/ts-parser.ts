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

const assignType = (
  checker: ts.TypeChecker,
  el: JSDocType,
  node?: ts.Node,
): void => {
  if (node) {
    if (ts.isArrayTypeNode(node)) {
      el.type = 'array';
      const arratType: JSDocType = {};
      assignType(checker, arratType, node.elementType);
      el.properties = [arratType];
    } else if (ts.isInterfaceDeclaration(node) || ts.isTypeLiteralNode(node)) {
      el.type = 'interface';
      el.properties = node.members
        .map(
          m =>
            m.name && parseSymbol(checker, checker.getSymbolAtLocation(m.name)),
        )
        .filter(m => m) as JSDocType['parameters'];
    } else if (ts.isTypeReferenceNode(node)) {
      el.type = 'reference';
      el.name = node.typeName.getText();
    } else {
      switch (node.kind) {
        case ts.SyntaxKind.ArrowFunction:
        case ts.SyntaxKind.FunctionExpression:
          el.type = 'function';
          break;
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NumberKeyword:
          el.type = 'number';
          break;
        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.StringKeyword:
          el.type = 'string';
          break;
        case ts.SyntaxKind.VoidKeyword:
          el.type = 'void';
          break;
        case ts.SyntaxKind.FalseKeyword:
        case ts.SyntaxKind.TrueKeyword:
        case ts.SyntaxKind.BooleanKeyword:
          el.type = 'boolean';
          break;
        case ts.SyntaxKind.ClassDeclaration:
          el.type = 'class';
          break;
        case ts.SyntaxKind.AnyKeyword:
          el.type = 'any';
          break;
        case ts.SyntaxKind.UnknownKeyword:
          el.type = 'unknown';
          break;
      }
    }
  }
};

const getValue = (expression: ts.Expression): any => {
  if (ts.isArrayLiteralExpression(expression)) {
    return expression.elements.map(e => getValue(e));
  } else if (
    ts.isNumericLiteral(expression) ||
    ts.isBigIntLiteral(expression)
  ) {
    return Number(expression.text);
  } else if (ts.isStringLiteral(expression)) {
    return expression.text;
  } else if (expression.kind === ts.SyntaxKind.FalseKeyword) {
    return false;
  } else if (expression.kind === ts.SyntaxKind.TrueKeyword) {
    return true;
  } else if (expression.kind === ts.SyntaxKind.UndefinedKeyword) {
    return undefined;
  } else if (expression.kind === ts.SyntaxKind.UnknownKeyword) {
    return 'unknown';
  }
};
const getDeclarationValue = (value?: ts.Declaration): any => {
  if (value) {
    const initializer = (value as any).initializer;
    if (initializer) {
      return getValue(initializer);
    }
  }
  return undefined;
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
  const initializer = declaration?.initializer;
  const typeDeclaration =
    symbol.valueDeclaration?.type || declaration?.type || declaration;
  const result: JSDocType = {
    value: getDeclarationValue(symbol.valueDeclaration),
    name: symbolName(symbol),
  };
  assignType(checker, result, typeDeclaration);
  if (initializer) {
    if (
      ts.isArrowFunction(initializer) ||
      ts.isFunctionExpression(initializer)
    ) {
      const returns = initializer.type;
      if (returns) {
        result.returns = parseSymbol(checker, returns.symbol);
      }
      assignType(checker, result, initializer);
      result.parameters = initializer.parameters
        .map(p => parseSymbol(checker, checker.getSymbolAtLocation(p.name)))
        .filter(p => p) as JSDocType['parameters'];
    }
    if (result.type === undefined) {
      assignType(checker, result, initializer);
    }
  }
  const descriptions = symbol.getDocumentationComment(checker);
  const tags = symbol.getJsDocTags();
  const jsDoc = [
    ...descriptions.map(({ text }) => `* ${text}`),
    ...tags.map(tag => `* @${tag.name}${tag.text ? ` ${tag.text}` : ''}`),
  ].join('\n');
  return mergeJSDocComments(result, jsDoc);
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
