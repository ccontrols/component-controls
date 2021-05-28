import { getTypescriptConfig } from '@component-controls/typescript-config';
import * as ts from 'typescript';
import { ParserOptions } from '@babel/parser';
import { babelParser } from './babel-parser';
import { tsParser } from './ts-parser';
import { JSDocType } from './utils';

export const run = (
  filePath: string,
  options: {
    babelOptions?: ParserOptions;
    tsOptions?: ts.CompilerOptions;
  } = {},
): Record<string, JSDocType> => {
  const tsConfig = getTypescriptConfig(filePath, options.tsOptions);
  if (tsConfig) {
    const results = tsParser(filePath, tsConfig);
    return results;
  }
  return babelParser(filePath, options.babelOptions);
};
