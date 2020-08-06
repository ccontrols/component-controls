import { loadStoriesTests } from './loadTestFiles';

describe('esm-parameters', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, ['esm', 'parameters']);
});
