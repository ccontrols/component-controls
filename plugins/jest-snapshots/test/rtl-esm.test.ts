import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'esm',
  renderer: 'rtl',
  configPath: path.resolve(__dirname, '.config'),
});
