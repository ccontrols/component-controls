import path from 'path';
import { Configuration, RuleSetUseItem } from 'webpack';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {
  PresetCallback,
  BuildProps,
  defCssFileName,
  customLoaderOptions,
} from '@component-controls/core';
import { findUpFile } from '@component-controls/core/node-utils';

/**
 portions of the code taken from react-scripts:
 https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js
 */

export const react: PresetCallback = (options: BuildProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  const cssLoaders: RuleSetUseItem[] = [];
  const postcssOptions = customLoaderOptions(options, 'postcss-loader', {});
  const postCssOptionsFile = findUpFile(process.cwd(), 'postcss.config.js');
  const hasPostCss = Object.keys(postcssOptions).length || postCssOptionsFile;
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
  const result = {
    plugins: [
      new MiniCssExtractPlugin({
        filename: options.cssFileName || defCssFileName,
      }),
    ].filter(Boolean),
    optimization: {
      minimizer: [isProd && new CssMinimizerPlugin()].filter(Boolean),
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
        {
          test: /\.mdx$/i,
          exclude: [/node_modules/],
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
                  bugfixes: true,
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              '@babel/preset-react',
            ],
          },
        },
        {
          test: /\.(eot|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/i,
          exclude: [/node_modules/],
          loader: 'url-loader',
          options: customLoaderOptions(options, 'url-loader', {
            limit: 1024 * 24,
            name: '[name].[ext]',
            publicPath: '/static',
            outputPath: path.relative(
              options?.distFolder || process.cwd(),
              path.resolve(options?.staticFolder || process.cwd()),
            ),
          }),
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: customLoaderOptions(options, 'file-loader', {
                name: '[name].[ext]',
                outputPath: path.relative(
                  options?.distFolder || process.cwd(),
                  path.resolve(options?.staticFolder || process.cwd()),
                ),
              }),
            },
          ],
        },
        {
          test: /\.(css|sass|scss|less)$/i,
          use: [
            // Creates `style` nodes from JS strings
            {
              loader: MiniCssExtractPlugin.loader,
              options: customLoaderOptions(
                options,
                'mini-css-extract-plugin',
                {},
              ),
            },
            {
              // Translates CSS into CommonJS
              loader: 'css-loader',
              options: customLoaderOptions(options, 'css-loader', {
                sourceMap: true,
              }),
            },
            ...cssLoaders,
            {
              // Compiles Sass to CSS
              loader: 'sass-loader',
              options: customLoaderOptions(options, 'sass-loader', {
                sourceMap: true,
              }),
            },
            {
              // Compiles less to CSS
              loader: 'less-loader',
              options: customLoaderOptions(options, 'less-loader', {
                sourceMap: true,
              }),
            },
          ],
        },
        {
          test: /\.txt$/i,
          use: [
            {
              loader: 'raw-loader',
              options: customLoaderOptions(options, 'raw-loader', {}),
            },
          ],
        },
        {
          test: /\.md$/i,
          use: [
            {
              loader: 'raw-loader',
              options: customLoaderOptions(options, 'raw-loader', {}),
            },
          ],
        },
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
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
  } as Configuration;
  return result;
};
