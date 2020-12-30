import { loadStoriesTests } from './loadTestFiles';

describe('esm-template', () => {
  loadStoriesTests(undefined, ['esm', 'template'], ['template-doc.tsx']);
});
