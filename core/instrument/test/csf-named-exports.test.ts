import { loadStoriesTests } from './loadTestFiles';

describe('csf-named-exports', () => {
  loadStoriesTests(
    { stories: { storeSourceFile: false } },
    'csf',
    'named-exports',
  );
});
