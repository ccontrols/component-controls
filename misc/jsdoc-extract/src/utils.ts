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
  | 'enum'
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
  | 'predicate'
  | 'index'
  | 'unknown';

export interface JSDocType {
  name?: string;
  kind?: string;
  namepath?: string;
  memberof?: string;
  type?: TSType;
  fnType?: 'constructor' | 'getter' | 'setter' | 'predicate';
  description?: string;
  parameters?: JSDocType[];
  properties?: JSDocType[];
  inherits?: JSDocType[];
  returns?: JSDocType;
  fires?: { data: string }[];
  see?: string[];
  examples?: JSDocExample[];
  value?: any;
  optional?: boolean;
  readonly?: boolean;
  abstract?: boolean;
  visibility?: 'private' | 'protected' | 'public';
  static?: boolean;
  deprecated?: string;
}

export type JSImport = {
  name?: string;
  module: string;
  namedImports?: Record<string, string>;
};

export type JSImports = JSImport[];

export type JSDocTypes = Record<string, JSDocType>;
export type JSAnalyzeResults = {
  imports: JSImports;
  structures: JSDocTypes;
};

export type FrameworkPlugin = (
  parsed: JSAnalyzeResults,
) => Record<string, JSDocType>;
