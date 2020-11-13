import { loadStoriesTests } from './loadTestFiles';

describe('mdx-playground', () => {
  loadStoriesTests(
    {
      mdx: { transformMDX: true },
      stories: { sourceFiles: false, package: false },
      components: { sourceFiles: false, package: false },
    },
    ['mdx', 'playground'],
  );
});
