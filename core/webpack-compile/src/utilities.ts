import webpack, {
  Compiler,
  Stats,
  HotModuleReplacementPlugin,
  BannerPlugin,
} from 'webpack';
import path from 'path';
import fs from 'fs';
import { log, error } from '@component-controls/logger';
import { mergeBuildConfiguration } from '@component-controls/config';
import { BuildProps, defBundleName } from '@component-controls/core';
import { LoadingStore } from '@component-controls/store';
import LoaderPlugin from '@component-controls/loader/plugin';
import {
  mergeWebpackConfig,
  deepMergeWebpackConfig,
} from '@component-controls/webpack-configs';
import { cliArgs } from './args';
import { ResolveExternals, ResolveExternalsConfig } from './resolve_externals';
import { defaultExternals } from './externals-config';

/**
 * return type from compile and watch functions
 */
export interface CompileResults {
  /**
   * bundle full path and name
   */

  bundleName: string;
  /**
   * the webpack stats object
   */
  stats: Stats;
  /**
   * the stories store
   */
  store?: LoadingStore;
}

/**
 * returns the default bumnle full path or args config
 *  ./public/component-controls.js
 */
export const getBundleName = (): string => {
  const args = cliArgs().parse();
  let distFolder = args.dist || `${path.join(process.cwd(), 'public')}`;
  if (!path.isAbsolute(distFolder)) {
    distFolder = path.resolve(process.cwd(), distFolder);
  }
  const bundleName = args.bundle || defBundleName;

  return path.join(distFolder, bundleName);
};
/**
 * callback function to monitor new documents/deleted documents
 */
export type CompilerCallbackFn = (results: CompileResults) => void;

const createConfig = (options: BuildProps): webpack.Configuration => {
  const {
    webpack,
    presets,
    configPath,
    mode,
    staticFolder: propStaticFolder,
    distFolder: propDistFolder,
    bundleName = defBundleName,
  } = options;
  let distFolder = propDistFolder || `${path.join(process.cwd(), 'public')}`;
  if (!path.isAbsolute(distFolder)) {
    distFolder = path.resolve(process.cwd(), distFolder);
  }
  const staticFolder = propStaticFolder || path.join(distFolder, 'static');
  const plugins = [
    new LoaderPlugin({
      config: configPath,
      escapeOutput: mode === 'development',
    }),
    new BannerPlugin({
      raw: true,
      banner: '/* eslint-disable */',
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
        filename: bundleName,
        libraryTarget: 'umd',
        globalObject: 'this',
      },
      resolve: {
        alias: {},
      },
      externals: {},
      plugins,
      ...(webpack || {}),
    },
    presets,
    { staticFolder, distFolder, ...options },
  );
  //add all the aliases to avoid double loading of packages
  const alias = new ResolveExternals(webpackConfig as ResolveExternalsConfig);
  defaultExternals.forEach(a => alias.addAlias(a));

  const userWebpackConfig =
    options && (options.webpack || options.finalWebpack);

  if (!userWebpackConfig) {
    return webpackConfig;
  }
  return typeof userWebpackConfig === 'function'
    ? userWebpackConfig(webpackConfig, options)
    : deepMergeWebpackConfig(webpackConfig, userWebpackConfig);
};

export const runCompiler = (
  run: (compiler: Compiler, callback: Parameters<Compiler['run']>[0]) => void,
  props: BuildProps,
  callback?: CompilerCallbackFn,
): Promise<CompileResults> => {
  return new Promise(resolve => {
    const buildConfig = mergeBuildConfiguration(props);
    const compiler = webpack(createConfig(buildConfig));

    run(compiler, (err, stats) => {
      const bundleName = path.join(
        stats?.compilation.outputOptions?.path || '',
        typeof stats?.compilation.outputOptions.filename === 'string'
          ? stats.compilation.outputOptions.filename
          : '',
      );
      const bailError = (error: string) => {
        fs.writeFileSync(
          bundleName,
          `
module.exports = ${JSON.stringify({
            stores: [],
            packages: [],
            components: [],
            error,
          })}

          `,
        );
        console.error(error);
        return resolve({ bundleName, stats: stats as Stats }); //reject(error);
      };
      if (err) {
        return bailError(err.toString());
      }
      if (stats?.hasErrors() || stats?.hasWarnings()) {
        const error = stats.toString({
          errorDetails: true,
          warnings: true,
        });
        return bailError(error);
      }
      const { store } = require('@component-controls/loader/store');
      if (store) {
        log(`compiled ${store.stores.length} documents`, bundleName);
      } else {
        error('error creating bundle', bundleName);
      }
      if (callback) {
        callback({ bundleName, stats: stats as Stats, store });
      }
      resolve({ bundleName, stats: stats as Stats, store });
    });
  });
};
