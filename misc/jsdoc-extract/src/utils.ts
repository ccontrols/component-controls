import { Node } from '@babel/types';
export interface JSDocTypeTag {
  type?: string;
  description?: string;
}

export interface JSDocExample {
  caption?: string;
  content?: string;
}
export type TSType =
  | 'object'
  | 'string'
  | 'number'
  | 'boolean'
  | 'union'
  | 'undefined'
  | 'null'
  | 'function'
  | 'void'
  | 'class'
  | 'unknown';

export interface JSDocType {
  name?: string;
  kind?: string;
  namepath?: string;
  memberof?: string;
  type: TSType;
  description?: string;
  parameters?: JSDocType[];
  properties?: JSDocType[];
  returns?: JSDocTypeTag;
  fires?: { data: string }[];
  see?: string[];
  examples?: JSDocExample[];
  value?: any;
  optional?: boolean;
  deprecated?: string;
}

export const extractComments = (node: Node): string | undefined => {
  return node.leadingComments
    ? node.leadingComments
        .filter(comment => comment.type === 'CommentBlock')
        .map(comment => comment.value)
        .join('/n')
    : undefined;
};
