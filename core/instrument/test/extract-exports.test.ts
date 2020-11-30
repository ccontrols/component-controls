import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions } from '../src/index';
import { extractExports } from '../src/babel/extract-exports';

describe('extract-exports', () => {
  loadTestFiles(
    async (fileName: string) => {
      const exports = extractExports(fileName, defaultParserOptions);

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
