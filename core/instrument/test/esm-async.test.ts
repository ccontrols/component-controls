import { loadStoriesTests } from './loadTestFiles';

describe('esm-async', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, ['esm', 'async']);
});
