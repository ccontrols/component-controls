import { loadStoriesTests } from './loadTestFiles';

describe('csf-exclude-stories', () => {
  loadStoriesTests(
    { stories: { storeSourceFile: false } },
    'csf',
    'exclude-stories',
  );
});
