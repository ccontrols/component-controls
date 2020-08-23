import { log, setLogOptions } from '@component-controls/logger';
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
    logOptions,
  }: CompileProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'optimized build');
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
    logOptions,
  }: WatchProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'development mode watch');
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
