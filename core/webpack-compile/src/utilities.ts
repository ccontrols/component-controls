import * as webpack from 'webpack';
import * as path from 'path';
import LoaderPlugin from '@component-controls/loader/plugin';
import { mergeWebpackConfig } from '@component-controls/webpack-configs';
import { CompileProps, CompileResults } from './types';

export type CompileRunProps = CompileProps & {
  /**
   * webpack mode
   */
  mode: webpack.Configuration['mode'];
};

const createConfig = ({
  webPack,
  presets,
  configPath,
  mode,
}: CompileRunProps): webpack.Configuration => {
  const webpackConfig = mergeWebpackConfig(
    {
      mode,
      ...(webPack || {}),
    },
    presets,
  );
  return {
    entry: {
      stories: require.resolve(
        '@component-controls/loader/story-store-data.js',
      ),
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js',
      library: 'store',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    ...webpackConfig,
    plugins: [
      new LoaderPlugin({
        config: configPath,
        escapeOutput: mode === 'development',
      }),
    ],
  };
};

export const runCompiler = (
  run: (
    compiler: webpack.Compiler,
    callback: (err: Error, stats: webpack.Stats) => void,
  ) => void,

  props: CompileRunProps,
): Promise<CompileResults> => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    const compiler = webpack.default(createConfig(props));
    run(compiler, (err, stats) => {
      if (err) {
        console.error(err);
        return reject(err);
      }
      if (stats.hasErrors() || stats.hasWarnings()) {
        const error = stats.toString({
          errorDetails: true,
          warnings: true,
        });
        console.error(error);
        return reject(error);
      }
      const { store } = require('@component-controls/loader/store');
      resolve({ store, stats });
    });
  });
};
