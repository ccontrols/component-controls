import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions } from '../src/index';
import { extractImports } from '../src/babel/extract-imports';

describe('extract-imports', () => {
  loadTestFiles(
    async (fileName: string) => {
      return extractImports(fileName, defaultParserOptions);
    },
    ['imports'],
  );
});
