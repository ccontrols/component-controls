import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'cjs',
  renderer: 'enzyme',
  config: path.resolve(__dirname, '.config'),
});
