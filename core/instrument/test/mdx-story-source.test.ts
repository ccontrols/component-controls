import { loadStoriesTests } from './loadTestFiles';

describe('mdx-story-source', () => {
  loadStoriesTests(
    {
      mdx: { transformMDX: true },
      stories: { package: false, storeSourceFile: false },
    },
    ['mdx', 'story-source'],
    //['external-source-props.mdx'],
  );
});
