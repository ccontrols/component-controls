import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'ts',
  renderer: 'rtr',
  configPath: path.resolve(__dirname, '.config'),
});
