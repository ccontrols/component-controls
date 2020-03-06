import * as parser from '@babel/parser';
import * as resolve from 'resolve';
import { Options, ResolveConfigOptions } from 'prettier';

export type PrettierOptions = Options & {
  resolveConfigOptions?: ResolveConfigOptions;
};

export const defaultResolveOptions: resolve.SyncOpts = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6'],
};

export const defaultParserOptions: parser.ParserOptions = {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
};

export interface ComponentOptions {
  resolveFile?: (componentName: string, FilePath: string) => string | undefined;
}

export type ParserOptions = parser.ParserOptions;

export type ResolveOptions = resolve.SyncOpts;

export interface InstrumentOptions {
  parser?: parser.ParserOptions;
  prettier?: PrettierOptions;
  resolve?: ResolveOptions;
  component?: ComponentOptions;
}
