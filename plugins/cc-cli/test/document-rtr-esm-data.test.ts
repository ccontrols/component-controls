import path from 'path';
import { runTests } from './run-document-tests';

runTests({
  format: 'esm',
  renderer: 'rtr',
  config: path.resolve(__dirname, '.config'),
  data: 3,
});
