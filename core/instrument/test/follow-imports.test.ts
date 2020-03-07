import { loadTestFiles } from './loadTestFiles';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { followImports } from '../src/babel/follow-imports';

describe('follow-imports', () => {
  loadTestFiles(async (fileName: string) => {
    return followImports('Button', require.resolve(fileName), undefined, {
      parser: defaultParserOptions,
      resolve: defaultResolveOptions,
    });
  }, 'follow-imports');
});
