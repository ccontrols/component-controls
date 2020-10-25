import path from 'path';
import { RuleSetLoader } from 'webpack';
import ExtractCssPlugin from 'extract-css-chunks-webpack-plugin';
import OptimizeCssAssetsWebpackPlugin from 'optimize-css-assets-webpack-plugin';

import {
  PresetType,
  BuildProps,
  defCssFileName,
  customLoaderOptions,
} from '@component-controls/core';
import { findUpFile } from '@component-controls/instrument';

export const react: PresetType = (options: BuildProps) => {
  const isProd = process.env.NODE_ENV === 'production';
  const cssLoaders: RuleSetLoader[] = [];
  const postcssOptions = customLoaderOptions(options, 'postcss-loader', {});
  const hasPostCss =
    Object.keys(postcssOptions).length ||
    findUpFile(process.cwd(), 'postcss.config.js');
  if (hasPostCss) {
    cssLoaders.push({
      loader: 'postcss-loader',
      options: {},
    });
  }
  const result: PresetType = {
    plugins: [
      new ExtractCssPlugin({
        filename: options.cssFileName || defCssFileName,
      }),
    ],
    optimization: { minimizer: [] },
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
                  ['@babel/preset-env', { modules: 'commonjs' }],
                  '@babel/preset-react',
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
          test: /\.(md|mdx)$/i,
          exclude: [/node_modules/],
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { modules: 'commonjs' }],
              '@babel/preset-react',
            ],
          },
        },
        {
          test: /\.(eot|md|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/i,
          exclude: [/node_modules/],
          loader: 'url-loader',
          options: customLoaderOptions(options, 'url-loader', {
            limit: 25000,
            name: '[name].[hash].[ext]',
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
          test: /\.(css|sass|scss|less|styl)$/i,
          use: [
            // Creates `style` nodes from JS strings
            // will export to a consolidated css file
            ExtractCssPlugin.loader,
            {
              // Translates CSS into CommonJS
              loader: 'css-loader',
              options: customLoaderOptions(options, 'css-loader', {}),
            },
            ...cssLoaders,
            {
              // Compiles Sass to CSS
              loader: 'sass-loader',
              options: customLoaderOptions(options, 'sass-loader', {}),
            },
            {
              // Compiles less to CSS
              loader: 'less-loader',
              options: customLoaderOptions(options, 'less-loader', {}),
            },
            {
              // Compiles stylus to CSS
              loader: 'stylus-loader',
              options: customLoaderOptions(options, 'stylus-loader', {}),
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
          test: /\.(md|mdx)$/i,
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
  };
  if (isProd) {
    result.optimization = {
      minimizer: [
        new OptimizeCssAssetsWebpackPlugin({
          cssProcessorOptions: {
            discardComments: { removeAll: true },
          },
        }),
      ],
    };
  }
  return result;
};
