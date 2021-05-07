import { randomizeSeed } from '@component-controls/core';
import { runTests } from './run-cli-tests';

describe('cli-document-data', () => {
  randomizeSeed(11223344);
  runTests('create cjs document', [
    '-g',
    'doc',
    '-d',
    '5',
    '-c',
    '../../ui/components/.config',
    '-w',
    '-i',
    'Popover',
  ]);
  runTests('create cjs document', ['-g', 'doc', '-f', 'cjs', '-d', '10']);
  runTests('create esm document', ['-g', 'doc', '-f', 'esm', '-d', '2']);
  runTests('create typescript document', ['-g', 'doc', '-f', 'ts', '-d', '2']);

  runTests('create rtr document', ['-g', 'doc', '-r', 'rtr', '-d', '2']);
  runTests('create enzyme document', ['-g', 'doc', '-r', 'enzyme', '-d', '2']);
});
