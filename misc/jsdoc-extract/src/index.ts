import { getTypescriptConfig } from '@component-controls/typescript-config';
import * as ts from 'typescript';
import { ParserOptions } from '@babel/parser';
import { anaylizeFiles } from './ts-walk';
import { JSAnalyzeResults, FrameworkPlugin, JSDocTypes } from './utils';
import { resolveProps } from './utils/resolve-props';
export { extractProps as extractReact } from './frameworks/react';

const tsDefaults = {
  jsx: ts.JsxEmit.React,
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.Latest,
};

export const analyzeFiles = (
  filePaths: string[],
  options: {
    babelOptions?: ParserOptions;
    tsOptions?: ts.CompilerOptions;
  } = {},
): JSAnalyzeResults => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  const tsConfig =
    getTypescriptConfig(filePaths[0], options.tsOptions) || tsDefaults;
  const results = anaylizeFiles(filePaths, tsConfig);
  return results;
};

export const extractProps = (
  names: string[],
  filePaths: string[],
  frameworkFn: FrameworkPlugin,
  options: {
    babelOptions?: ParserOptions;
    tsOptions?: ts.CompilerOptions;
  } = {},
): Record<string, JSDocTypes> => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  const tsConfig =
    getTypescriptConfig(filePaths[0], options.tsOptions) || tsDefaults;
  const results = anaylizeFiles(filePaths, tsConfig);

  return names.reduce((acc, name) => {
    const frameworkCleaned = frameworkFn(name, results);
    if (frameworkCleaned) {
      return {
        ...acc,
        [name]: resolveProps(frameworkCleaned),
      };
    }
    return acc;
  }, {});
};
