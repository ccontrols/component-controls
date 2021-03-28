import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'esm',
  renderer: 'rtl',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
