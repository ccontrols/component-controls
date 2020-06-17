import * as webpack from 'webpack';
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
import * as path from 'path';
import LoaderPlugin from '@component-controls/loader/plugin';
import {
  mergeWebpackConfig,
  deepMergeWebpackConfig,
} from '@component-controls/webpack-configs';
import { loadConfiguration } from '@component-controls/config';
import { CompileProps, CompileResults } from './types';

export type CompileRunProps = CompileProps & {
  /**
   * webpack mode
   */
  mode: webpack.Configuration['mode'];
};

const createConfig = (options: CompileRunProps): webpack.Configuration => {
  const { webPack, presets, configPath, mode, bundleAnalyzer } = options;
  const initialWebpackConfig = mergeWebpackConfig(
    {
      mode,
      ...(webPack || {}),
    },
    presets,
  );
  const plugins = [
    new LoaderPlugin({
      config: configPath,
      escapeOutput: mode === 'development',
    }),
  ];
  if (bundleAnalyzer) {
    plugins.push(
      new BundleAnalyzerPlugin({
        generateStatsFile: true,
        statsFilename: 'stats.json',
      }),
    );
  }

  const webpackConfig: webpack.Configuration = {
    entry: {
      stories: require.resolve(
        '@component-controls/loader/story-store-data.js',
      ),
    },

    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'bundle.js',
      libraryTarget: 'umd',
      globalObject: 'this',
    },
    resolve: {
      alias: {
        '@component-controls/blocks': require.resolve(
          '@component-controls/blocks',
        ),
        '@component-controls/core': require.resolve('@component-controls/core'),
        '@component-controls/loader': require.resolve(
          '@component-controls/loader',
        ),
        '@component-controls/components': require.resolve(
          '@component-controls/components',
        ),
        'broadcast-channel': require.resolve('broadcast-channel'),
        'theme-ui': require.resolve('theme-ui'),
        'axe-core': require.resolve('axe-core'),
        '@theme-ui/presets': require.resolve('@theme-ui/presets'),
        '@theme-ui/core': require.resolve('@theme-ui/core'),
        '@theme-ui/css': require.resolve('@theme-ui/css'),

        'prism-react-renderer': require.resolve('prism-react-renderer'),
        'react-helmet': require.resolve('react-helmet'),
        'react-table': require.resolve('react-table'),
        'react-color': require.resolve('react-color/lib'),
        'react-tabs': require.resolve('react-tabs'),
        'react-switch': require.resolve('react-switch'),
        'react-popper': require.resolve('react-popper'),
        'react-popper-tooltip': require.resolve('react-popper-tooltip'),
        'react-animate-height': require.resolve('react-animate-height'),
        '@primer/octicons-react': require.resolve('@primer/octicons-react'),
        '@emotion/styled': require.resolve('@emotion/styled'),
        '@mdx-js/react': require.resolve('@mdx-js/react'),
        'faker/locale/en_US': require.resolve('faker/locale/en_US'),
        'markdown-to-jsx': require.resolve('markdown-to-jsx'),
        lodash: require.resolve('lodash'),
        polished: require.resolve('polished'),
        'react-dom': require.resolve('react-dom'),
        'prop-types': require.resolve('prop-types'),
      },
    },
    externals: {
      react: {
        commonjs: 'react',
        commonjs2: 'react',
        amd: 'React',
        root: 'React',
      },
      'react-dom': {
        commonjs: 'react-dom',
        commonjs2: 'react-dom',
        amd: 'ReactDOM',
        root: 'ReactDOM',
      },
      'prop-types': {
        commonjs: 'prop-types',
        commonjs2: 'prop-types',
        amd: 'PropTypes',
        root: 'PropTypes',
      },
      'theme-ui': 'theme-ui',
      '@theme-ui/presets': '@theme-ui/presets',
      '@theme-ui/core': '@theme-ui/core',
      '@theme-ui/css': '@theme-ui/css',
      'axe-core': 'axe-core',
      polished: 'polished',
      lodash: 'lodash',
      'broadcast-channel': 'broadcast-channel',
      'prism-react-renderer/themes': 'prism-react-renderer/themes',
      'prism-react-renderer': 'prism-react-renderer',
      'react-helmet': 'react-helmet',
      'react-table': 'react-table',
      'react-color/lib': 'react-color/lib',
      'react-tabs': 'react-tabs',
      'react-switch': 'react-switch',
      'react-popper': 'react-popper',
      'react-popper-tooltip': 'react-popper-tooltip',
      'react-animate-height': 'react-animate-height',
      '@primer/octicons-react': '@primer/octicons-react',
      '@emotion/styled': '@emotion/styled',
      '@mdx-js/react': '@mdx-js/react',
      'faker/locale/en_US': 'faker/locale/en_US',
      'markdown-to-jsx': 'markdown-to-jsx',
      '@component-controls/core': '@component-controls/core',
      '@component-controls/loader': '@component-controls/loader',
      '@component-controls/blocks': '@component-controls/blocks',
      '@component-controls/components': '@component-controls/components',
    },
    ...initialWebpackConfig,
    plugins,
  };
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
