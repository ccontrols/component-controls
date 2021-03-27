import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { TeplateFormats } from '../src/types';

export const runTests = async (
  format: TeplateFormats,
  test: string,
): Promise<void> => {
  const extension = format === 'ts' ? 'ts' : 'js';
  const testFileName = path.resolve(
    __dirname,
    `test_example_run.test.${extension}`,
  );
  const snapshotFileName = path.resolve(
    __dirname,
    `__snapshots__/test_example_run.test.${extension}.snap`,
  );
  try {
    fs.writeFileSync(testFileName, test);
    if (fs.existsSync(snapshotFileName)) {
      fs.unlinkSync(snapshotFileName);
    }
    await runCLI(
      {
        testRegex: 'test_example_run',
        testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
        silent: true,
        verbose: false,
        watchman: false,
      } as Config.Argv,
      [__dirname],
    );
  } finally {
    if (fs.existsSync(testFileName)) {
      fs.unlinkSync(testFileName);
    }
    if (fs.existsSync(snapshotFileName)) {
      fs.unlinkSync(snapshotFileName);
    }
  }
};
