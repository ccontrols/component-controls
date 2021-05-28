import {
  TSType,
  TSTypeAnnotation,
  TSTypeLiteral,
  TSUnionType,
  TSFunctionType,
  TSTypeReference,
  Node,
} from '@babel/types';
import { JSDocType } from './utils';
import { mergeJSDocComments, getNodeComments } from './jsdoc-parse';

export const parseTypeNode = (
  filePath: string,
  node?: Node,
): JSDocType | undefined => {
  if (node) {
    const typeNode = (node as any).left || node;

    const result = mergeJSDocComments(
      {
        type: 'void',
      },
      getNodeComments(node),
    );
    if ((node as any).right) {
      result.value = (node as any).right.value;
    }
    const type = typeNode.typeAnnotation || typeNode;
    if (type) {
      const name = (typeNode as any).name || (typeNode as any).key?.name;
      if (name) {
        result.name = name;
      }
      const optional = (typeNode as any).optional;
      if (optional !== undefined) {
        result.optional = optional;
      }
      switch (
        type.type as TSType['type'] | 'TSTypeAnnotation' | 'StringLiteral'
      ) {
        case 'TSTypeAnnotation':
          const v = parseTypeNode(filePath, (type as any) as TSTypeAnnotation);
          if (v) {
            Object.assign(result, v);
          }
          break;
        case 'TSNumberKeyword':
          result.type = 'number';
          break;
        case 'TSVoidKeyword':
          result.type = 'void';
          break;
        case 'TSUnknownKeyword':
          result.type = 'unknown';
          break;

        case 'TSUnionType':
          result.type = 'union';
          result.properties = (type as TSUnionType).types
            .map(type => parseTypeNode(filePath, type as any))
            .filter(p => p) as JSDocType[];
          break;
        case 'TSFunctionType':
          result.type = 'function';
          result.parameters = (type as TSFunctionType).parameters
            .map(param => parseTypeNode(filePath, param as any))
            .filter(p => p) as JSDocType[];
          result.returns = parseTypeNode(filePath, type.typeAnnotation);
          break;
        case 'StringLiteral':
        case 'TSStringKeyword':
          result.type = 'string';
          if (typeNode.value) {
            result.value = typeNode.value;
          }
          break;
        case 'TSBooleanKeyword':
          result.type = 'boolean';
          break;
        case 'TSUndefinedKeyword':
          result.type = 'undefined';
          break;
        case 'TSNullKeyword':
          result.type = 'null';
          break;

        case 'TSAnyKeyword':
          break;
        case 'TSTypeLiteral':
          result.type = 'object';
          result.properties = (type as TSTypeLiteral).members
            .map(member => parseTypeNode(filePath, member as any))
            .filter(p => p) as JSDocType[];
          break;
        case 'TSLiteralType':
          Object.assign(result, parseTypeNode(filePath, type.literal));
          break;
        case 'TSTypeReference':
          result.type = type.typeName.name;
          if (type.typeParameters?.params) {
            result.parameters = (type as TSTypeReference).typeParameters?.params
              .map(param => parseTypeNode(filePath, param as any))
              .filter(p => p) as JSDocType[];
          }
          break;
      }
    }
    return result;
  }
  return undefined;
};
