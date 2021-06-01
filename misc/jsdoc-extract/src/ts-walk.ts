import * as ts from 'typescript';
import { JSDocType, JSAnalyzeResults, JSImports } from './utils';
import { parseNode } from './parse-node';
import { parsImports } from './parse-imports';
const isNodeExported = (node: ts.Node): boolean => {
  return (
    (ts.getCombinedModifierFlags(node as ts.Declaration) &
      ts.ModifierFlags.Export) !==
      0 ||
    (!!node.parent && node.parent.kind === ts.SyntaxKind.SourceFile)
  );
};

const visitTopLevel = (
  checker: ts.TypeChecker,
  symbols: ts.Symbol[],
  imports: JSImports,
) => {
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
      (ts.isEnumDeclaration(node) ||
        ts.isClassDeclaration(node) ||
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
    } else if (ts.isImportDeclaration(node)) {
      const jsImport = parsImports(node);
      imports.push(jsImport);
    }
  };
  return visit;
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
  return parseNode({}, declaration, declaration?.initializer, [
    { comment: comments.join('/n * '), tags },
  ]);
};

export const anaylizeFiles = (
  fileNames: string[],
  options: ts.CompilerOptions,
): JSAnalyzeResults => {
  const program = ts.createProgram(fileNames, options);

  // Get the checker, we will use it to find more about classes
  const checker = program.getTypeChecker();
  const symbols: ts.Symbol[] = [];
  const imports: JSImports = [];

  // Visit every sourceFile in the program
  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile) {
      // Walk the tree
      ts.forEachChild(sourceFile, visitTopLevel(checker, symbols, imports));
    }
  }
  const structures: Record<string, JSDocType> = {};
  for (const symbol of symbols) {
    const result = parseSymbol(checker, symbol);
    if (result) {
      structures[result.name as string] = result;
    }
  }
  return {
    imports,
    structures: structures,
  };
};
