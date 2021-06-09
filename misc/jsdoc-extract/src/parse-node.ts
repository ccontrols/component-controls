import * as ts from 'typescript';
import {
  PropType,
  PropKind,
  ObjectProp,
  NumberProp,
  StringProp,
  BooleanProp,
  AnyProp,
  UnknownProp,
} from './utils';

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

export class NodeParser {
  private checker: ts.TypeChecker;
  constructor(checker: ts.TypeChecker) {
    this.checker = checker;
  }
  parseNode(
    defaults: PropType,
    type?: ts.Node,
    initializer?: ts.Node,
  ): PropType {
    const node = type || initializer;
    let result: PropType = { ...defaults };
    if (node) {
      if (ts.isVariableDeclaration(node)) {
        if (node.type && node.initializer) {
          //a type reference, the type will need to be deducted
          result.type = this.parseNode({}, node.type);
          result = this.parseNode(result, node.initializer);
        } else {
          result = this.parseNode(result, node.type, node.initializer);
        }
      } else if (ts.isExportSpecifier(node)) {
        if (node.propertyName) {
          const symbol = this.checker.getSymbolAtLocation(node.propertyName);
          console.log(symbol);
        }
        console.log(node);
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
    }
    return result;
  }
}
