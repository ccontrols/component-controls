import { getTypescriptConfig } from '@component-controls/typescript-config';
import { fileSync } from 'tmp';
import * as ts from 'typescript';
import { anaylizeFiles } from './ts-walk';
import { ParseOptions, PropTypes, FrameworkPlugin } from './utils';
import { resolveProps } from './utils/resolve-props';
export { extractProps as extractReact } from './frameworks/react';

const tsDefaults = {
  jsx: ts.JsxEmit.React,
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.Latest,
};

export const parseFiles = (
  filePaths: string[],
  options: ParseOptions = {},
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  const tsConfig =
    getTypescriptConfig(filePaths[0], options.tsOptions) || tsDefaults;
  const results = anaylizeFiles(filePaths, tsConfig);
  return results;
};

export const parseCode = (code: string, options?: ParseOptions): PropTypes => {
  const { name } = fileSync();
  const fileName = name + '.ts';
  ts.sys.writeFile(fileName, code);
  let result: PropTypes = {};
  try {
    result = parseFiles([fileName], options);
  } finally {
    if (ts.sys.deleteFile) {
      ts.sys.deleteFile(fileName);
    }
  }
  return result;
};
export const parseProps = (
  names: string[],
  filePaths: string[],
  frameworkFn: FrameworkPlugin,
  options: ParseOptions = {},
): Record<string, PropTypes> => {
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
