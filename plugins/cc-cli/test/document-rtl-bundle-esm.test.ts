import path from 'path';
import { runTests } from './run-document-tests';

runTests({
  format: 'esm',
  renderer: 'rtl',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
});
