import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'cjs',
  renderer: 'rtl',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  data: 3,
});
