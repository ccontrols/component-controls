import { loadStoriesTests } from './loadTestFiles';

describe('esm-components', () => {
  loadStoriesTests(
    {
      stories: { sourceFiles: false, package: false },
      components: { sourceFiles: false, package: false },
    },
    ['esm', 'components'],
  );
});
