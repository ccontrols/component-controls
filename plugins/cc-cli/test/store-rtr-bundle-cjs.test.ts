import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'cjs',
  renderer: 'rtr',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
