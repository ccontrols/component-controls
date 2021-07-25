import * as fs from 'fs';
import * as parser from '@babel/parser';
import { File } from '@babel/types';
import { ExportTypes, ImportTypes } from './consts';

export type CacheProps = {
  ast: File;
  source: string;
  imports?: ImportTypes;
  exports?: ExportTypes;
  importAliases?: Record<string, string>;
};
const astCache: Record<string, CacheProps> = {};

export const parseFile = (
  filePath: string,
  options?: parser.ParserOptions,
  sourceCode?: string,
  cache = true,
): CacheProps => {
  const source = sourceCode || fs.readFileSync(filePath, 'utf8');
  if (!cache) {
    return { ast: parser.parse(source, options), source };
  }
  const filekey = `${filePath}-${fs.statSync(filePath).mtime.toString()}`;
  if (astCache[filekey]) {
    return astCache[filekey];
  }
  const ast = parser.parse(source, options);
  astCache[filekey] = { ast, source };
  return astCache[filekey];
};
