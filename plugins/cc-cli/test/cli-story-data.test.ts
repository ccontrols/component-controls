import { randomizeSeed } from '@component-controls/core';
import { setLogOptions } from '@component-controls/logger';
import { runTests } from './run-cli-tests';

describe('cli-story-data', () => {
  setLogOptions({ logLevel: 'none' });
  randomizeSeed(11223344);
  runTests('create cjs story', ['-g', 'story', '-f', 'cjs', '-d', '2']);
  runTests('create esm story', ['-g', 'story', '-f', 'esm', '-d', '2']);
  runTests('create typescript story', ['-g', 'story', '-f', 'ts', '-d', '2']);

  runTests('create rtr story', ['-g', 'story', '-r', 'rtr', '-d', '2']);
  runTests('create enzyme story', ['-g', 'story', '-r', 'enzyme', '-d', '2']);
});