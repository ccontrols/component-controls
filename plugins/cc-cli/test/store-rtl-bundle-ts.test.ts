import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'ts',
  renderer: 'rtl',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
