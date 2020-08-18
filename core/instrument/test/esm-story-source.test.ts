import { loadStoriesTests } from './loadTestFiles';

describe('esm-story-source', () => {
  loadStoriesTests(
    {
      stories: { package: false, sourceFiles: false },
    },
    ['esm', 'story-source'],
    // ['external-source-props.js'],
  );
});
