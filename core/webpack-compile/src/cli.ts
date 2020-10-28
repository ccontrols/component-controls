import { compile, watch } from './index';
import { cliArgs, CliArgTypes, ArgOptions } from './args';
import { LogLevel } from '@component-controls/logger';

export { cliArgs, defaultCliArgs, ArgOptions } from './args';

export const getArgs = (options?: ArgOptions): CliArgTypes => {
  const argv = cliArgs(options);
  return argv.help().alias('help', 'h').argv;
};
export const run = async (options?: ArgOptions): Promise<void> => {
  const argv = getArgs(options);
  process.env.NODE_ENV = argv.mode;
  const exec = argv.watch ? watch : compile;
  await exec({
    configPath: argv.config,
    presets: argv.presets,
    bundleName: argv.bundle,
    distFolder: argv.dist,
    staticFolder: argv.static,
    logOptions: {
      logLevel: argv.loglevel as LogLevel,
    },
  });
};
