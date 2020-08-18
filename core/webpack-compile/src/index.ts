const chalk = require('chalk');
import {
  CompileProps,
  CompileResults,
  WatchProps,
} from '@component-controls/webpack-configs';
import { runCompiler, CompilerCallbackFn } from './utilities';

export { CompilerCallbackFn };

/**
 * compile the stories with webpack
 * returns the stories store object
 */
export const compile = (
  {
    webPack,
    presets,
    configPath,
    staticFolder,
    distFolder,
    bundleName,
  }: CompileProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  console.log(
    chalk.bgRgb(244, 147, 66)('@start compilation'),
    'optimized build',
  );
  return runCompiler(
    (compiler, callback) => compiler.run(callback),
    {
      webPack,
      mode: 'production',
      presets,
      configPath,
      staticFolder,
      distFolder,
      bundleName,
    },
    callback,
  );
};

/**
 * compile the stories with webpack and launch watching for changes
 * returns the stories store object
 */
export const watch = (
  {
    webPack,
    presets,
    configPath,
    watchOptions,
    staticFolder,
    distFolder,
    bundleName,
  }: WatchProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  console.log(
    chalk.bgRgb(244, 147, 66)('@start compilation'),
    'development mode watch',
  );
  return runCompiler(
    (compiler, callback) => compiler.watch({ ...watchOptions }, callback),
    {
      webPack,
      mode: 'development',
      presets,
      configPath,
      staticFolder,
      distFolder,
      bundleName,
    },
    callback,
  );
};
