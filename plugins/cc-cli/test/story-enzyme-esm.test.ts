import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'esm',
  renderer: 'enzyme',
  config: path.resolve(__dirname, '.config'),
});
