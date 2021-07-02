import * as ts from 'typescript';
import { getTypescriptConfig } from '@component-controls/typescript-config';
import { anaylizeFiles } from './ts-walk';
import { PropTypes } from './types';
import { tsDefaults, DocsOptions } from './ts-utils';
export * from './types';
export * from './ts-utils';

export const parseFiles = (
  filePaths: string[],
  options: DocsOptions = {},
): PropTypes => {
  if (!filePaths.length) {
    throw new Error('You need to supply at least one file');
  }
  options.tsOptions = {
    ...tsDefaults,
    ...getTypescriptConfig(filePaths[0], options.tsOptions),
  };
  const results = anaylizeFiles(filePaths, options);
  return results;
};

export const parseCode = (code?: string, options?: DocsOptions): PropTypes => {
  let result: PropTypes = {};
  if (code) {
    const { lang = 'typescript' } = options?.tsOptions || {};
    const tsOptions = {
      ...tsDefaults,
      ...options?.tsOptions,
    };
    const host = ts.createCompilerHost(tsOptions);
    if (host.createHash) {
      const name = host.createHash(Math.random().toString()).substring(0, 12);
      const fileName = name + (lang === 'javascript' ? '.js' : '.ts');
      ts.sys.writeFile(fileName, code);
      try {
        result = anaylizeFiles([fileName], { ...options, tsOptions });
      } finally {
        if (ts.sys.deleteFile) {
          ts.sys.deleteFile(fileName);
        }
      }
    }
  }
  return result;
};
