import { loadStoriesTests } from './loadTestFiles';

describe('csf-hoisted', () => {
  loadStoriesTests({ stories: { storeSourceFile: false } }, ['csf', 'hoisted']);
});
