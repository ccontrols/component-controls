import { loadTestFiles } from './loadTestFiles';
import {
  defaultParserOptions,
  defaultResolveOptions,
  defaultComponentOptions,
} from '../src/index';
import { followImports } from '../src/babel/follow-imports';

describe('follow-imports', () => {
  loadTestFiles(
    async (fileName: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { path, node, ...rest } =
        followImports('Button', require.resolve(fileName), undefined, {
          parser: defaultParserOptions,
          resolver: defaultResolveOptions,
          components: { ...defaultComponentOptions, storeSourceFile: false },
        }) || {};
      return rest;
    },
    ['follow-imports'],
    // ['button-from-node-nodules.js'],
  );
});
