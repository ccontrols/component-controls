import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'cjs',
  renderer: 'rtr',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  data: 3,
});
