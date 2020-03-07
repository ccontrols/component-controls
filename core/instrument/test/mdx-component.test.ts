import { parseMDX } from '../src/index';
import { loadMDXTests } from './loadTestFiles';

describe('mdx-component', () => {
  loadMDXTests('mdx', 'component');
});
