import * as fs from 'fs';
import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions } from '../src/index';
import { extractImports } from '../src/babel/extract-imports';

describe('extract-imports', () => {
  loadTestFiles(async (fileName: string) => {
    const content = fs.readFileSync(fileName, 'utf8');
    return extractImports(content, defaultParserOptions);
  }, 'imports');
});
