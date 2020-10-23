import { log, setLogOptions } from '@component-controls/logger';
import { BuildProps, WatchProps } from '@component-controls/core';

import {
  runCompiler,
  CompilerCallbackFn,
  getBundleName,
  CompileResults,
} from './utilities';
export { CompilerCallbackFn, CompileResults, getBundleName };

/**
 * compile the stories with webpack
 * returns the stories store object
 */
export const compile = (
  { logOptions, ...rest }: BuildProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'optimized build');
  return runCompiler(
    (compiler, callback) => compiler.run(callback),
    {
      ...rest,
      mode: 'production',
    },
    callback,
  );
};

/**
 * compile the stories with webpack and launch watching for changes
 * returns the stories store object
 */
export const watch = (
  { watchOptions, logOptions, ...rest }: WatchProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'development mode watch');
  return runCompiler(
    (compiler, callback) => compiler.watch({ ...watchOptions }, callback),
    {
      ...rest,
      mode: 'development',
    },
    callback,
  );
};
