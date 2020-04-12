import { loadStoriesTests } from './loadTestFiles';

describe('csf-props-usage', () => {
  loadStoriesTests(
    { stories: { storeSourceFile: false } },
    ['csf', 'props-usage'],
    //['select-prop.js'],
  );
});
