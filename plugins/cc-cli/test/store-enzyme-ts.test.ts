import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'ts',
  renderer: 'enzyme',
  config: path.resolve(__dirname, '.config'),
});
