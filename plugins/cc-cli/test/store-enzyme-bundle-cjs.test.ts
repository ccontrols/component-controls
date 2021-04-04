import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'cjs',
  renderer: 'enzyme',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
