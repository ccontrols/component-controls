import * as fs from 'fs';
import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions } from '../src/index';
import { extractExports } from '../src/babel/extract-exports';

describe('extract-exports', () => {
  loadTestFiles(
    async (fileName: string) => {
      const content = fs.readFileSync(fileName, 'utf8');
      const exports = extractExports(content, defaultParserOptions);

      return {
        named: Object.keys(exports.named).reduce((acc, key) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { path, node, ...rest } = exports.named[key];
          return { ...acc, [key]: rest };
        }, {}),
        default: exports.default,
      };
      return;
    },
    ['exports'],
  );
});
