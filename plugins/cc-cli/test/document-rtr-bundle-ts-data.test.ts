import path from 'path';
import { runTests } from './run-document-tests';

runTests({
  format: 'ts',
  renderer: 'rtr',
  bundle: path.resolve(__dirname, 'bundle/component-controls.js'),
  data: 3,
});
