import { loadStoriesTests } from './loadTestFiles';

describe('esm-hoisted', () => {
  loadStoriesTests({ stories: { sourceFiles: false } }, ['esm', 'hoisted']);
});
