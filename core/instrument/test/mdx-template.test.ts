import { loadStoriesTests } from './loadTestFiles';

describe('mdx-stories', () => {
  loadStoriesTests(
    {
      mdx: {
        transformMDX: true,
      },
    },
    ['mdx', 'template'],
  );
});
