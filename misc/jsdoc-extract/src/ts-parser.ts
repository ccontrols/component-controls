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

const assignType = (
  checker: ts.TypeChecker,
  el: JSDocType,
  type?: ts.Node,
  initializer?: ts.Node,
): void => {
  const node = type || initializer;
  if (node) {
    if (ts.isArrayTypeNode(node) || ts.isArrayLiteralExpression(node)) {
      el.type = 'array';
      if (ts.isArrayTypeNode(node)) {
        const arratType: JSDocType = {};
        assignType(checker, arratType, node.elementType);
        el.properties = [arratType];
      }
      if (initializer) {
        el.value = (initializer as ts.ArrayBindingPattern).elements.map(m => {
          const arrEl = {};
          assignType(checker, arrEl, m, m);
          return arrEl;
        });
      }
    } else if (ts.isInterfaceDeclaration(node)) {
      el.type = 'interface';
      if (node.heritageClauses?.length) {
        const inherits: JSDocType[] = [];
        node.heritageClauses.forEach(h => {
          h.types.forEach(t => {
            const elInh = {};
            assignType(checker, elInh, t.expression, t.expression);
            inherits.push(elInh);
          });
        });
        el.inherits = inherits;
      }
      el.properties = node.members.map(m => {
        const r =
          m.name && parseSymbol(checker, checker.getSymbolAtLocation(m.name));
        if (r) {
          return r;
        }
        const e = {};
        assignType(checker, e, m);
        return e;
      });
    } else if (ts.isIndexSignatureDeclaration(node)) {
      el.type = 'index';
      const e = {};
      assignType(checker, e, node.type);
      el.parameters = [e];
      el.properties = node.parameters.map(m => {
        const e = {};
        assignType(checker, e, m);
        return e;
      });
    } else if (ts.isIntersectionTypeNode(node)) {
      el.type = 'type';
      el.properties = node.types.map(t => {
        const e = {};
        assignType(checker, e, t);
        return e;
      });
    } else if (ts.isTypeLiteralNode(node)) {
      el.type = 'type';
      el.properties = node.members.map(m => {
        const r =
          m.name && parseSymbol(checker, checker.getSymbolAtLocation(m.name));
        if (r) {
          return r;
        }
        const e = {};
        assignType(checker, e, m);
        return e;
      });
    } else if (ts.isTypeAliasDeclaration(node)) {
      assignType(checker, el, node.type);
    } else if (ts.isUnionTypeNode(node)) {
      el.type = 'union';
      el.properties = node.types.map(m => {
        const el: JSDocType = {};
        assignType(checker, el, m, (m as ts.LiteralTypeNode).literal);
        return el;
      });
    } else if (ts.isTypeReferenceNode(node)) {
      el.type = 'reference';
      el.name = node.typeName.getText();
    } else if (ts.isLiteralTypeNode(node)) {
      assignType(checker, el, node.literal, node.literal);
    } else if (ts.isIdentifier(node)) {
      el.type = 'reference';
      el.name = node.text;
    } else if (ts.isVariableDeclaration(node)) {
      assignType(checker, el, node.type, node.initializer);
    } else if (ts.isPropertySignature(node) || ts.isParameter(node)) {
      if (node.questionToken) {
        el.optional = true;
      }
      if (node.modifiers?.find(m => m.kind === ts.SyntaxKind.ReadonlyKeyword)) {
        el.readonly = true;
      }
      assignType(checker, el, node.type, node.initializer);
    } else if (ts.isPropertyAssignment(node)) {
      if (node.questionToken) {
        el.optional = true;
      }
      assignType(checker, el, node.initializer, node.initializer);
    } else if (ts.isFunctionDeclaration(node) || ts.isArrowFunction(node)) {
      if (node.questionToken) {
        el.optional = true;
      }
      el.type = 'function';
      el.parameters = node.parameters
        .map(m => {
          const r =
            m.name && parseSymbol(checker, checker.getSymbolAtLocation(m.name));
          if (r) {
            return r;
          }
          const e = {};
          assignType(checker, e, m.type);
          return e;
        })
        .filter(m => m) as JSDocType['properties'];
      const returns: JSDocType = {};
      assignType(checker, returns, node.type);
      if (returns.type) {
        el.returns = returns;
      }
    } else {
      switch (node.kind) {
        case ts.SyntaxKind.NumericLiteral:
        case ts.SyntaxKind.NumberKeyword:
          el.type = 'number';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            el.value = Number((initializer as ts.LiteralLikeNode).text);
          }
          break;

        case ts.SyntaxKind.StringLiteral:
        case ts.SyntaxKind.StringKeyword:
          el.type = 'string';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            el.value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.FalseKeyword:
          el.value = false;
          el.type = 'boolean';
          break;

        case ts.SyntaxKind.TrueKeyword:
          el.value = true;
          el.type = 'boolean';
          break;
        case ts.SyntaxKind.BooleanKeyword:
          el.type = 'boolean';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            el.value = Boolean((initializer as ts.LiteralLikeNode).text);
          }
          break;
        case ts.SyntaxKind.ClassDeclaration:
          el.type = 'class';
          break;
        case ts.SyntaxKind.VoidKeyword:
          el.type = 'void';
          break;
        case ts.SyntaxKind.ObjectKeyword:
          el.type = 'object';
          el.value = el.value = strToValue(
            (initializer as ts.LiteralLikeNode)?.text,
          );

          break;
        case ts.SyntaxKind.AnyKeyword:
          el.type = 'any';
          if (
            typeof (initializer as ts.LiteralLikeNode)?.text !== 'undefined'
          ) {
            el.value = (initializer as ts.LiteralLikeNode).text;
          }
          break;
        case ts.SyntaxKind.UnknownKeyword:
          el.type = 'unknown';
          el.value = strToValue((initializer as ts.LiteralLikeNode)?.text);
          break;
        case ts.SyntaxKind.NullKeyword:
          el.type = 'null';
          el.value = null;
          break;
        case ts.SyntaxKind.UndefinedKeyword:
          el.type = 'undefined';
          el.value = undefined;
          break;
      }
      if (initializer && ts.isObjectLiteralExpression(initializer)) {
        el.value = initializer.properties
          .map(
            m =>
              m.name &&
              parseSymbol(checker, checker.getSymbolAtLocation(m.name)),
          )
          .filter(m => m) as JSDocType['properties'];
      }
    }
  }
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
  const result: JSDocType = {
    name: symbolName(symbol),
  };
  assignType(
    checker,
    result,
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
