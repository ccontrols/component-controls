import { loadStoriesTests } from './loadTestFiles';

describe('csf-parameters', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, [
    'csf',
    'parameters',
  ]);
});
