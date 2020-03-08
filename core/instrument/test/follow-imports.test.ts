import { loadTestFiles } from './loadTestFiles';
import {
  defaultParserOptions,
  defaultResolveOptions,
  defaultComponentOptions,
} from '../src/index';
import { followImports } from '../src/babel/follow-imports';

describe('follow-imports', () => {
  loadTestFiles(async (fileName: string) => {
    return followImports('Button', require.resolve(fileName), undefined, {
      parser: defaultParserOptions,
      resolver: defaultResolveOptions,
      components: defaultComponentOptions,
    });
  }, 'follow-imports');
});
