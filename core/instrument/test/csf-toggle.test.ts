import { loadStoriesTests } from './loadTestFiles';

describe('csf-toggle', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, 'csf', 'toggle');
});
