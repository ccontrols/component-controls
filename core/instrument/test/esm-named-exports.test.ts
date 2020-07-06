import { loadStoriesTests } from './loadTestFiles';

describe('esm-named-exports', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, [
    'esm',
    'named-exports',
  ]);
});
