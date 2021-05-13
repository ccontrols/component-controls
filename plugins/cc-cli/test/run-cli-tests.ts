import path from 'path';
import fs from 'fs';
const mockArgv = require('mock-argv');
import { setLogOptions } from '@component-controls/logger';

import { run } from '../src/cli/cli';

export const runTests = (testName: string, args: string[]): void => {
  setLogOptions({ logLevel: 'none' });
  it(
    testName,
    async () => {
      const outPath = `${path.resolve(__dirname, './cli-test')}`;
      await mockArgv(
        [
          ...args,
          ...(args.indexOf('-c') === -1
            ? ['-c', `${path.resolve(__dirname, './.config')}`]
            : []),
          '-o',
          outPath,
          '-s',
          '11223344',
        ],
        async () => {
          await run();
          const content: Record<string, string> = {};
          const files = fs.readdirSync(outPath);
          for (const file of files) {
            content[file] = fs.readFileSync(
              path.resolve(outPath, file),
              'utf8',
            );
            fs.unlinkSync(path.resolve(outPath, file));
          }
          fs.rmdirSync(outPath);
          expect(content).toMatchSnapshot();
        },
      );
    },
    500000,
  );
};
