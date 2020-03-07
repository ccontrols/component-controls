import { ParserOptions } from '@babel/parser';
import { SyncOpts as ResolveOptions } from 'resolve';
import {
  Options,
  ResolveConfigOptions as ResolvePrettierConfigOptions,
} from 'prettier';

type PrettierOptions = Options & {
  resolveConfigOptions?: ResolvePrettierConfigOptions;
};
export { ParserOptions, ResolveOptions, PrettierOptions };

export const defaultResolveOptions: ResolveOptions = {
  extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue', '.mjs', '.es', '.es6'],
};

export const defaultParserOptions: ParserOptions = {
  sourceType: 'module',
  plugins: ['jsx', 'typescript'],
};

export interface ComponentOptions {
  resolveFile?: (componentName: string, filePath: string) => string | undefined;
}
/**
 * Options passed for instrumenting
 */
export interface InstrumentOptions {
  parser?: ParserOptions;
  /**
   * prettier options are used to prettify the code at the end of the process
   * this is useful for "story" code, where the story is extracted from the full file
   * fassing a value of false as prettier option will disabled prettifying
   */
  prettier?: PrettierOptions | false;
  resolve?: ResolveOptions;
  component?: ComponentOptions;
}
