import { loadStoriesTests } from './loadTestFiles';

describe('esm-doc', () => {
  loadStoriesTests(
    { stories: { sourceFiles: false } },
    ['esm', 'doc'],
    //['typed-export.ts'],
  );
});
