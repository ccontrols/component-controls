import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'cjs',
  renderer: 'enzyme',
  config: path.resolve(__dirname, '.config'),
  data: 3,
});
