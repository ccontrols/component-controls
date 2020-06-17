import { CompileProps, CompileResults, WatchProps } from './types';
import { runCompiler } from './utilities';
export * from './types';
/**
 * compile the stories with webpack
 * returns the stories store object
 */
export const compile = ({
  webPack,
  presets,
  configPath,
  bundleAnalyzer,
}: CompileProps): Promise<CompileResults> => {
  return runCompiler((compiler, callback) => compiler.run(callback), {
    webPack,
    mode: 'production',
    presets,
    configPath,
    bundleAnalyzer,
  });
};

/**
 * compile the stories with webpack and launch watching for changes
 * returns the stories store object
 */
export const watch = ({
  webPack,
  presets,
  configPath,
  bundleAnalyzer,
  watchOptions,
}: WatchProps): Promise<CompileResults> => {
  return runCompiler(
    (compiler, callback) => compiler.watch({ ...watchOptions }, callback),
    {
      webPack,
      mode: 'development',
      presets,
      configPath,
      bundleAnalyzer,
    },
  );
};
