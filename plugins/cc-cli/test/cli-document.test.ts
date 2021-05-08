import { setLogOptions } from '@component-controls/logger';
import { runTests } from './run-cli-tests';

describe('cli-document', () => {
  setLogOptions({ logLevel: 'none' });
  runTests('create cjs document', ['-g', 'doc', '-f', 'cjs']);
  runTests('create esm document', ['-g', 'doc', '-f', 'esm']);
  runTests('create typescript document', ['-g', 'doc', '-f', 'ts']);

  runTests('create rtr document', ['-g', 'doc', '-r', 'rtr']);
  runTests('create enzyme document', ['-g', 'doc', '-r', 'enzyme']);
});
