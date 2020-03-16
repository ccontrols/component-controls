import { loadStoriesTests } from './loadTestFiles';

describe('csf-components', () => {
  loadStoriesTests(
    {
      stories: { storeSourceFile: false, package: false },
      components: { storeSourceFile: false, package: false },
    },
    'csf',
    'components',
  );
});
