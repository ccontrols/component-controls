import { loadStoriesTests } from './loadTestFiles';

describe('mdx-component', () => {
  loadStoriesTests(
    {
      stories: { storeSourceFile: false, package: false },
      components: { storeSourceFile: false, package: false },
    },
    ['mdx', 'component'],
  );
});
