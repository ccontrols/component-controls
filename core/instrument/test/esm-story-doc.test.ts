import { loadStoriesTests } from './loadTestFiles';

describe('esm-story-doc', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, ['esm', 'doc']);
});
