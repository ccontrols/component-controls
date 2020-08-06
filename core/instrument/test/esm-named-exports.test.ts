import { loadStoriesTests } from './loadTestFiles';

describe('esm-named-exports', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, [
    'esm',
    'named-exports',
  ]);
});
