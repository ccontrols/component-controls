import { loadStoriesTests } from './loadTestFiles';

describe('csf-story-doc', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, ['csf', 'doc']);
});
