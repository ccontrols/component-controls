import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'cjs',
  renderer: 'rtr',
  configPath: path.resolve(__dirname, '.config'),
});
