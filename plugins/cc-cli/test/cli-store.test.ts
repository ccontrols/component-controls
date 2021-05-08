import { runTests } from './run-cli-tests';

describe('cli-store', () => {
  runTests('create cjs store', ['-g', 'store', '-f', 'cjs']);
  runTests('create esm store', ['-g', 'store', '-f', 'esm']);
  runTests('create typescript store', ['-g', 'store', '-f', 'ts']);

  runTests('create rtr store', ['-g', 'store', '-r', 'rtr']);
  runTests('create enzyme store', ['-g', 'store', '-r', 'enzyme']);
});
