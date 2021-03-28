import path from 'path';
import { runTests } from './run-tests';

runTests({
  format: 'cjs',
  renderer: 'enzyme',
  configPath: path.resolve(__dirname, '.config'),
});
