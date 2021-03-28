import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'ts',
  renderer: 'rtr',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
