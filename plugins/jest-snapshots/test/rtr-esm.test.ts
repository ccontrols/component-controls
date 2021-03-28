import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'esm',
  renderer: 'rtr',
  configPath: path.resolve(__dirname, '.config'),
});
