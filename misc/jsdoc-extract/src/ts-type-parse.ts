import { TSType, TSTypeAnnotation, TSTypeLiteral } from '@babel/types';

export interface TypescriptType {
  name?: string;
  optional?: boolean;
  type: 'object' | 'string' | 'number' | 'boolean' | 'undefined' | 'null';
  props?: TypescriptType[];
  default?: any;
}

export const parseTypeNode = (
  node?: TSTypeAnnotation,
): TypescriptType | undefined => {
  if (node) {
    const typeNode = (node as any).left || node;
    const result: TypescriptType = {
      type: 'undefined',
    };
    if ((node as any).right) {
      result.default = (node as any).right.value;
    }
    const type = typeNode.typeAnnotation;
    if (type) {
      const name = (typeNode as any).name || (typeNode as any).key?.name;
      if (name) {
        result.name = name;
      }
      const optional = (typeNode as any).optional;
      if (optional !== undefined) {
        result.optional = optional;
      }
      switch (type.type as TSType['type'] | 'TSTypeAnnotation') {
        case 'TSTypeAnnotation':
          const v = parseTypeNode((type as any) as TSTypeAnnotation);
          if (v) {
            if (v.type) {
              result.type = v.type;
            }
          }
          break;
        case 'TSNumberKeyword':
          result.type = 'number';
          break;
        case 'TSStringKeyword':
          result.type = 'string';
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
          result.props = (type as TSTypeLiteral).members
            .map(member => parseTypeNode(member as any))
            .filter(p => p) as TypescriptType[];
          break;
      }
    }
    return result;
  }
  return undefined;
};
