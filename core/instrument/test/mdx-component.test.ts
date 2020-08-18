import { loadStoriesTests } from './loadTestFiles';

describe('mdx-component', () => {
  loadStoriesTests(
    {
      stories: { sourceFiles: false, package: false },
      components: { sourceFiles: false, package: false },
    },
    ['mdx', 'component'],
  );
});
