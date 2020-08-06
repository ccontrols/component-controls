import { loadStoriesTests } from './loadTestFiles';

describe('esm-props-usage', () => {
  loadStoriesTests(
    { stories: { sourceFiles: false } },
    ['esm', 'props-usage'],
    // ['shorthand.js'],
  );
});
