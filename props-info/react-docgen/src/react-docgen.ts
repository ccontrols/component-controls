import * as fs from 'fs';
import { ParserOptions } from '@babel/parser';
import { parse } from 'react-docgen';

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
export const extractDocgenInfo = (
  fileName: string,
  componentName?: string,
  source?: string,
  reactDocGenOptions?: RectDocgenOptions,
) => {
  const { resolver, handlers, options } = reactDocGenOptions || {};
  const src = source ? source : fs.readFileSync(fileName, 'utf8');
  try {
    return parse(src, resolver, handlers, { filename: fileName, ...options });
  } catch (e) {
    console.error(
      `\nreact-docgen unable to parse ${componentName}: ${fileName}`,
    );
    return undefined;
  }
};
