import { loadStoriesTests } from './loadTestFiles';

describe('esm-components', () => {
  loadStoriesTests(
    {
      stories: { storeSourceFile: false, package: false },
      components: { storeSourceFile: false, package: false },
    },
    ['esm', 'components'],
  );
});
