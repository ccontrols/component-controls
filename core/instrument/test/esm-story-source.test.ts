import { loadStoriesTests } from './loadTestFiles';

describe('esm-story-source', () => {
  loadStoriesTests(
    {
      stories: { package: false, storeSourceFile: false },
    },
    ['esm', 'story-source'],
    // ['external-source-props.js'],
  );
});
