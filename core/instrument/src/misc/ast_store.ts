import * as fs from 'fs';
import * as parser from '@babel/parser';
import { File } from '@babel/types';
import traverse from '@babel/traverse';
import { ImportTypes } from '@component-controls/core';
import { traverseImports } from '../babel/extract-imports';
import { traverseExports, ExportTypes } from '../babel/extract-exports';

type CacheProps = {
  ast: File;
  source: string;
  imports?: ImportTypes;
  exports?: ExportTypes;
};
const astCache: Record<string, CacheProps> = {};

export const parseFile = (
  filePath: string,
  options?: parser.ParserOptions,
  sourceCode?: string,
): CacheProps => {
  if (astCache[filePath]) {
    return astCache[filePath];
  }
  const source = sourceCode || fs.readFileSync(filePath, 'utf8');
  const ast = parser.parse(source, options);
  astCache[filePath] = { ast, source };
  return astCache[filePath];
};

export const parseImports = (
  fileName: string,
  options?: parser.ParserOptions,
): ImportTypes => {
  const cache = parseFile(fileName, options);
  if (!cache.imports) {
    cache.imports = {};
    traverse(cache.ast, traverseImports(cache.imports));
  }
  return cache.imports;
};

export const parseExports = (
  fileName: string,
  options?: parser.ParserOptions,
): ExportTypes => {
  const cache = parseFile(fileName, options);
  if (!cache.exports) {
    cache.exports = { named: {} };
    traverse(cache.ast, traverseExports(cache.exports));
  }
  return cache.exports;
};
