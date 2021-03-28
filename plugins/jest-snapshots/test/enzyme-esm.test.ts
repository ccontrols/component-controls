import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'esm',
  renderer: 'enzyme',
  configPath: path.resolve(__dirname, '.config'),
});
