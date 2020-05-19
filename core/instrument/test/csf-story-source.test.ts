import { loadStoriesTests } from './loadTestFiles';

describe('csf-story-source', () => {
  loadStoriesTests(
    {
      stories: { package: false, storeSourceFile: false },
    },
    ['csf', 'story-source'],
    // ['external-source-props.js'],
  );
});
