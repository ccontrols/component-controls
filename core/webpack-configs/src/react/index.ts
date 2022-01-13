import path from 'path';
import { Configuration, RuleSetUseItem } from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import {
  PresetCallback,
  BuildProps,
  WebpackLoader,
  customLoaderOptions,
} from '@component-controls/core';
import {
  findUpFile,
  getCSSBundleName,
} from '@component-controls/core/node-utils';

/**
 portions of the code taken from react-scripts:
 https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
 */

export const react: PresetCallback = (options: BuildProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  const cssLoaders: RuleSetUseItem[] = [];
  const postcssOptions = customLoaderOptions(options, 'postcss-loader');
  const postCssOptionsFile = findUpFile(process.cwd(), 'postcss.config.js');
  const hasPostCss =
    postcssOptions &&
    (Object.keys(postcssOptions).length || postCssOptionsFile);
  if (hasPostCss && !((postcssOptions as any).disable === true)) {
    cssLoaders.push({
      loader: 'postcss-loader',
      options: {
        postcssOptions:
          typeof postCssOptionsFile === 'string'
            ? require(postCssOptionsFile)
            : undefined,
        sourceMap: true,
      },
    });
  }
  const useLoader = (
    name: { loader: WebpackLoader; loaderName?: string },
    defaultOptions?: string | { [index: string]: any },
    props?: { [index: string]: any },
  ) => {
    const { loader, loaderName } = name;
    const config = customLoaderOptions(options, loader, defaultOptions);
    if (config) {
      delete config.module;
      return {
        loader: loaderName || loader,
        ...props,
        options: config,
      };
    }
    return false;
  };
  const ruleLoader = (
    rule: { test: RegExp; exclude?: RegExp[]; loader: WebpackLoader },
    defaultOptions?: string | { [index: string]: any },
    props?: { [index: string]: any },
  ) => {
    const { test, exclude, loader } = rule;
    const config = customLoaderOptions(options, loader, defaultOptions);
    if (config) {
      return {
        test,
        exclude,
        use: [
          {
            loader,
            ...props,
            options: config,
          },
        ],
      };
    }
    return false;
  };
  const miniCssOptions = customLoaderOptions(
    options,
    'mini-css-extract-plugin',
  );
  const MiniCssExtractPlugin: typeof import('mini-css-extract-plugin') =
    typeof miniCssOptions === 'object' && miniCssOptions?.module
      ? require(miniCssOptions.module)
      : require('mini-css-extract-plugin');
  const result = {
    plugins: [
      miniCssOptions &&
        new MiniCssExtractPlugin({
          filename: getCSSBundleName(options),
        }),
    ].filter(Boolean),
    optimization: {
      minimizer: [
        isProd &&
          customLoaderOptions(options, 'css-minimizer-webpack-plugin') &&
          new CssMinimizerPlugin(),
      ].filter(Boolean),
    },
    performance: { hints: false },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        browsers: ['last 5 versions', 'ie >= 9'],
                        node: 'current',
                      },
                      modules: 'commonjs',
                      useBuiltIns: 'usage',
                      corejs: 3,
                    },
                  ],
                  ['@babel/preset-react', { runtime: 'classic' }],
                ],
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [['react-app', { flow: false, typescript: true }]],
              },
            },
          ],
        },
        ruleLoader(
          {
            test: /\.mdx$/i,
            exclude: [/node_modules/],
            loader: 'babel-loader',
          },
          {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['last 5 versions', 'ie >= 9'],
                    node: 'current',
                  },
                  modules: 'commonjs',
                  bugfixes: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
            ],
          },
        ),
        ruleLoader(
          {
            test: /\.(eot|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/i,
            exclude: [/node_modules/],
            loader: 'url-loader',
          },
          {
            limit: 1024 * 24,
            name: '[name].[ext]',
            publicPath: '/static',
            outputPath: path.relative(
              options?.distFolder || process.cwd(),
              path.resolve(options?.staticFolder || process.cwd()),
            ),
          },
        ),
        ruleLoader(
          {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
          },
          {
            name: '[name].[ext]',
            outputPath: path.relative(
              options?.distFolder || process.cwd(),
              path.resolve(options?.staticFolder || process.cwd()),
            ),
          },
        ),
        {
          test: /\.(css|sass|scss|less)$/i,
          use: [
            useLoader({
              loader: 'mini-css-extract-plugin',
              loaderName: MiniCssExtractPlugin.loader,
            }),
            useLoader(
              { loader: 'css-loader' },
              {
                sourceMap: true,
              },
            ),

            ...cssLoaders,
            useLoader(
              {
                // Compiles Sass to CSS
                loader: 'sass-loader',
              },
              {
                sourceMap: true,
              },
            ),
            useLoader(
              {
                // Compiles less to CSS
                loader: 'less-loader',
              },
              {
                sourceMap: true,
              },
            ),
          ].filter(Boolean),
        },
        ruleLoader({
          test: /\.txt$/i,
          loader: 'raw-loader',
        }),
        ruleLoader({
          test: /\.md$/i,
          loader: 'raw-loader',
        }),
        {
          test: /\.mdx$/i,
          exclude: [/node_modules/],
          loader: '@component-controls/loader/loader',
          enforce: 'pre',
          options: {
            mdx: {
              transformMDX: true,
            },
          },
        },
        {
          test: /\.(story|stories|doc|docs).(js|jsx|ts|tsx)$/,
          loader: '@component-controls/loader/loader',
          exclude: [/node_modules/],
          enforce: 'pre',
        },
      ].filter(Boolean),
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  } as Configuration;
  return result;
};
