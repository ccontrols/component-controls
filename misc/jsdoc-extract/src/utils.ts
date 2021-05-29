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
  | 'tuple'
  | 'rest'
  | 'undefined'
  | 'null'
  | 'function'
  | 'void'
  | 'class'
  | 'interface'
  | 'type'
  | 'array'
  | 'any'
  | 'reference'
  | 'index'
  | 'unknown';

export interface JSDocType {
  name?: string;
  kind?: string;
  namepath?: string;
  memberof?: string;
  type?: TSType;
  description?: string;
  parameters?: JSDocType[];
  properties?: JSDocType[];
  inherits?: JSDocType[];
  returns?: JSDocTypeTag;
  fires?: { data: string }[];
  see?: string[];
  examples?: JSDocExample[];
  value?: any;
  optional?: boolean;
  readonly?: boolean;
  deprecated?: string;
}
