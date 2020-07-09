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
  outputFolder,
}: CompileProps): Promise<CompileResults> => {
  return runCompiler((compiler, callback) => compiler.run(callback), {
    webPack,
    mode: 'production',
    presets,
    configPath,
    outputFolder,
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
  watchOptions,
  outputFolder,
}: WatchProps): Promise<CompileResults> => {
  return runCompiler(
    (compiler, callback) => compiler.watch({ ...watchOptions }, callback),
    {
      webPack,
      mode: 'development',
      presets,
      configPath,
      outputFolder,
    },
  );
};
