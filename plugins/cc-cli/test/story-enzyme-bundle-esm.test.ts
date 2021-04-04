import path from 'path';
import { runTests } from './run-story-tests';

runTests({
  format: 'esm',
  renderer: 'enzyme',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
