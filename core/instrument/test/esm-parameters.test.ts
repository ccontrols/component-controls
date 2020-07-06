import { loadStoriesTests } from './loadTestFiles';

describe('esm-parameters', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, [
    'esm',
    'parameters',
  ]);
});
