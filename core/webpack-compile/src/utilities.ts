import webpack, {
  Configuration,
  Compiler,
  Stats,
  HotModuleReplacementPlugin,
} from 'webpack';
import * as path from 'path';
const chalk = require('chalk');
import LoaderPlugin from '@component-controls/loader/plugin';
import {
  mergeWebpackConfig,
  deepMergeWebpackConfig,
} from '@component-controls/webpack-configs';
import { loadConfiguration } from '@component-controls/config';
import { CompileProps, CompileResults } from './types';
import { ResolveExternals, ResolveExternalsConfig } from './resolve_externals';
import { defaultExternals } from './externals-config';

export type CompileRunProps = CompileProps & {
  /**
   * webpack mode
   */
  mode: Configuration['mode'];
};

const createConfig = (options: CompileRunProps): webpack.Configuration => {
  const { webPack, presets, configPath, mode, outputFolder } = options;
  const distFolder = path.resolve(__dirname, '../dist');
  const plugins = [
    new LoaderPlugin({
      config: configPath,
      escapeOutput: mode === 'development',
    }),
    mode === 'development' && new HotModuleReplacementPlugin({}),
  ].filter(Boolean);
  const webpackConfig = mergeWebpackConfig(
    {
      mode,
      entry: {
        stories: require.resolve(
          '@component-controls/loader/story-store-data.js',
        ),
      },
      output: {
        path: distFolder,
        filename: 'bundle.js',
        libraryTarget: 'umd',
        globalObject: 'this',
      },
      resolve: {
        alias: {},
      },
      externals: {},
      plugins,
      ...(webPack || {}),
    },
    presets,
    { outputFolder, distFolder },
  );

  //add all the aliases to avoid double loading of packages
  const alias = new ResolveExternals(webpackConfig as ResolveExternalsConfig);
  defaultExternals.forEach(a => alias.addAlias(a));

  const runConfig = loadConfiguration(process.cwd(), configPath);

  const userWebpackConfig =
    runConfig?.config &&
    (runConfig.config.webpack || runConfig.config.finalWebpack);

  if (!userWebpackConfig) {
    return webpackConfig;
  }
  return typeof userWebpackConfig === 'function'
    ? userWebpackConfig(webpackConfig, options)
    : deepMergeWebpackConfig(webpackConfig, userWebpackConfig);
};

export const runCompiler = (
  run: (
    compiler: Compiler,
    callback: (err: Error, stats: Stats) => void,
  ) => void,

  props: CompileRunProps,
): Promise<CompileResults> => {
  return new Promise((resolve, reject) => {
    //@ts-ignore
    const compiler = webpack(createConfig(props));
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
      console.log(
        chalk.bgRgb(244, 147, 66)(`compiled ${store.stores.length} documents`),
        require.resolve('@component-controls/loader/store'),
      );
      resolve({ store, stats });
    });
  });
};
