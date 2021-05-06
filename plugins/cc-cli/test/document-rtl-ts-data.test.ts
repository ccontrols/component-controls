import path from 'path';
import { runTests } from './run-document-tests';

runTests({
  format: 'ts',
  renderer: 'rtl',
  config: path.resolve(__dirname, '.config'),
  data: 3,
});
