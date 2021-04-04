import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'esm',
  renderer: 'rtr',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
