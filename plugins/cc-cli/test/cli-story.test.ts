import { runTests } from './run-cli-tests';

describe('cli-story', () => {
  runTests('create cjs story', ['-g', 'story', '-f', 'cjs']);
  runTests('create esm story', ['-g', 'story', '-f', 'esm']);
  runTests('create typescript story', ['-g', 'story', '-f', 'ts']);

  runTests('create rtr story', ['-g', 'story', '-r', 'rtr']);
  runTests('create enzyme story', ['-g', 'story', '-r', 'enzyme']);

  /*   runTests('create bundle story', [
    '-g',
    'story',
    '-b',
    path.resolve(__dirname, './bundle/component-controls.js'),
  ]); */
});
