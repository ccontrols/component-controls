import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'ts',
  renderer: 'rtl',
  config: path.resolve(__dirname, '.config'),
});
