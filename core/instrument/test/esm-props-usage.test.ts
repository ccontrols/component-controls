import { loadStoriesTests } from './loadTestFiles';

describe('esm-props-usage', () => {
  loadStoriesTests(
    { stories: { storeSourceFile: false } },
    ['esm', 'props-usage'],
    // ['shorthand.js'],
  );
});
