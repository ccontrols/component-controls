import { loadStoriesTests } from './loadTestFiles';

describe('csf-story-kind', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, 'csf', 'kind');
});
