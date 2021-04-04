import path from 'path';
import { runTests } from './run-store-tests';

runTests({
  format: 'ts',
  renderer: 'rtr',
  config: path.resolve(__dirname, '.config'),
});
