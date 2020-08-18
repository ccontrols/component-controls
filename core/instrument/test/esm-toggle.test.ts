import { loadStoriesTests } from './loadTestFiles';

describe('esm-toggle', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, ['esm', 'toggle']);
});
