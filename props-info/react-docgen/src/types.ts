import { ParserOptions } from '@babel/parser';

type ASTNode = object;

export interface Scope {
  lookup: (name: string) => Scope | undefined;
  lookupType: (name: string) => Scope | undefined;
  getBindings: () => { [key: string]: NodePath[] };
  getTypes: () => { [key: string]: NodePath[] };
  node: NodePath;
}

export interface NodePath {
  value: ASTNode | ASTNode[];
  node: ASTNode;
  parent: NodePath;
  parentPath: NodePath;
  scope: Scope;
  get(...x: (string | number)[]): NodePath;
  each(f: (p: NodePath) => any): any;
  map<T>(f: (p: NodePath) => T): T[];
  filter(f: (p: NodePath) => boolean): NodePath[];
  push(node: ASTNode): void;
}
type Documentation = any;

export type ResolverType = (
  ast: ASTNode,
  parser: { parse: (srource: string) => ASTNode },
) => NodePath | NodePath[];

export interface OptionsType {
  filename?: string;
  cwd?: string;
  babelrc?: boolean;
  babelrcRoots?: boolean;
  root?: boolean;
  rootMode?: boolean;
  configFile?: boolean;
  envName?: boolean;
  parserOptions?: ParserOptions;
}
export type HandlerType = (
  documentation: Documentation,
  definition: NodePath,
  parser: { parse: (source: string) => ASTNode },
) => void;

export interface RectDocgenOptions {
  resolver?: ResolverType;
  handlers?: HandlerType[];
  options?: OptionsType;
}

export interface RdPropInfo {
  description?: string;
  defaultValue?: null | {
    value?: string;
  };
  type?: RdPropType;
  tsType?: RdTypescriptType;
  flowType?: RdTypescriptType;
  required?: boolean;
}
export type RdPropInfoRecord = Record<string, RdPropInfo>;
export interface RdValue {
  name: string;
  value: string;
  required?: boolean;
}
export interface RdPropType {
  name: string;
  required?: boolean;
  value: Record<string, RdValue> | RdValue[];
}
export interface RdTypescriptType {
  name: string;
  required?: boolean;

  elements: RdTypescriptType[];
  signature: {
    return: RdTypescriptType;
    arguments: RdTypescriptType[];
    properties: RdTypescriptType[];
  };
}
