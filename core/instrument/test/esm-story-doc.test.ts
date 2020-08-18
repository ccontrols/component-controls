import { loadStoriesTests } from './loadTestFiles';

describe('esm-story-doc', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, ['esm', 'doc']);
});
