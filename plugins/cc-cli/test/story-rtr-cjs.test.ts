import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'cjs',
  renderer: 'rtr',
  config: path.resolve(__dirname, '.config'),
});
