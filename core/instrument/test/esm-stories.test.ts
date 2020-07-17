import { loadStoriesTests } from './loadTestFiles';

describe('esm-stories', () => {
  loadStoriesTests(undefined, ['esm', 'stories']);
});
