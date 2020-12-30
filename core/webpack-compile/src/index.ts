import { log, setLogOptions } from '@component-controls/logger';
import { BuildProps, Store, WatchProps } from '@component-controls/core';

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
export const compile = async (
  { logOptions, ...rest }: BuildProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'optimized build');
  const results = await runCompiler(
    (compiler, callback) => compiler.run(callback),
    {
      ...rest,
      mode: 'production',
    },
  );
  if (callback) {
    await callback(results);
  }
  return results;
};

/**
 * compile the stories with webpack and launch watching for changes
 * returns the stories store object
 */
export const watch = async (
  { watchOptions, logOptions, ...rest }: WatchProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  setLogOptions(logOptions);
  log('start compilation', 'development mode watch');
  const results = await runCompiler(
    (compiler, callback) => compiler.watch({ ...watchOptions }, callback),
    {
      ...rest,
      mode: 'development',
    },
  );
  if (callback) {
    await callback(results);
  }
  return results;
};

export const searchIndexing = async (store: Store): Promise<void> => {
  const { search } = store.config;
  if (search?.indexingModule) {
    const createSearchIndex = require(search.indexingModule);
    await createSearchIndex(store);
  }
};
