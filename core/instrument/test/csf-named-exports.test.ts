import { loadCSFTests } from './loadTestFiles';
import { parseCSF } from '../src/index';

describe('csf-named-exports', () => {
  loadCSFTests('csf', 'named-exports');
});
