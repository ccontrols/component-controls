import { loadStoriesTests } from './loadTestFiles';

describe('esm-toggle', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, ['esm', 'toggle']);
});
