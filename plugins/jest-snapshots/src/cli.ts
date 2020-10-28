import path from 'path';
import fs from 'fs';
import { run as runJest } from 'jest-cli';
import {
  run as runCompiler,
  defaultCliArgs,
  cliArgs,
} from '@component-controls/webpack-compile/cli';
import { jestCliArgs } from './args';

const isCommandArg = (arg: string) =>
  arg.startsWith('--') || arg.startsWith('-');
export const run = async (): Promise<void> => {
  await runCompiler(jestCliArgs);
  const args = cliArgs(jestCliArgs);

  let testFolder =
    (args.parse().test as string) || path.resolve(process.cwd(), 'tests');
  if (!path.isAbsolute(testFolder)) {
    testFolder = path.resolve(process.cwd(), testFolder);
  }
  const allArgs = [...defaultCliArgs, ...jestCliArgs];
  const argv = process.argv.slice(2);
  const storiesFileName = 'stories.test.js';
  const jestArgs: string[] = [];
  const pushJestArg = (arg: string, len: number) => {
    const command = arg.substring(len);
    if (
      len &&
      allArgs.find(
        cliArg => command === (len === 2 ? cliArg.name : cliArg.options.alias),
      )
    ) {
      return true;
    } else {
      if (command.startsWith('jest-')) {
        jestArgs.push(`${'-'.repeat(len)}${command.substring(5)}`);
      } else {
        jestArgs.push(arg);
      }
      return false;
    }
  };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) {
      if (
        pushJestArg(argv[i], 2) &&
        i < argv.length - 1 &&
        !isCommandArg(argv[i + 1])
      ) {
        i += 1;
      }
    } else if (argv[i].startsWith('-')) {
      if (
        pushJestArg(argv[i], 1) &&
        i < argv.length - 1 &&
        !isCommandArg(argv[i + 1])
      ) {
        i += 1;
      }
    } else {
      pushJestArg(argv[i], 0);
    }
  }
  if (!fs.existsSync(testFolder)) {
    fs.mkdirSync(testFolder);
  }
  fs.copyFileSync(
    path.resolve(__dirname, '..', storiesFileName),
    path.resolve(testFolder, storiesFileName),
  );
  await runJest(jestArgs, testFolder);
  fs.unlinkSync(path.resolve(testFolder, storiesFileName));
};
