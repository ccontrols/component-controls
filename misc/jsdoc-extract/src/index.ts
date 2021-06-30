import * as ts from 'typescript';
import { getTypescriptConfig } from '@component-controls/typescript-config';
import { anaylizeFiles } from './ts-walk';
import { PropTypes } from './types';
import { tsDefaults, DocsOptions } from './ts-utils';
export * from './types';

export const parseFiles = (
  filePaths: string[],
  options: DocsOptions = {},
  names?: string[],
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  options.tsOptions = {
    ...tsDefaults,
    ...getTypescriptConfig(filePaths[0], options.tsOptions),
  };
  const results = anaylizeFiles(filePaths, options, names);
  return results;
};

export const parseCode = (
  code?: string,
  options?: DocsOptions,
  names?: string[],
): PropTypes => {
  let result: PropTypes = {};
  if (code) {
    const tsOptions = {
      ...tsDefaults,
      ...options?.tsOptions,
    };
    const host = ts.createCompilerHost(tsOptions);
    if (host.createHash) {
      const name = host.createHash(Math.random().toString());
      const fileName = name + '.ts';
      ts.sys.writeFile(fileName, code);
      try {
        result = anaylizeFiles([fileName], { ...options, tsOptions }, names);
      } finally {
        if (ts.sys.deleteFile) {
          ts.sys.deleteFile(fileName);
        }
      }
    }
  }
  return result;
};
