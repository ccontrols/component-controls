import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'ts',
  renderer: 'rtl',
  configPath: path.resolve(__dirname, '.config'),
});
