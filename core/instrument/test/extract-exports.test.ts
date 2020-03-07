import * as fs from 'fs';
import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions } from '../src/index';
import { extractExports } from '../src/babel/extract-exports';

describe('extract-exports', () => {
  loadTestFiles(async (fileName: string) => {
    const content = fs.readFileSync(fileName, 'utf8');
    return extractExports(content, defaultParserOptions);
  }, 'exports');
});
