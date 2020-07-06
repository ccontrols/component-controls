import { loadStoriesTests } from './loadTestFiles';

describe('esm-hoisted', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, ['esm', 'hoisted']);
});
