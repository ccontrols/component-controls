import * as path from 'path';
import { PresetType, PresetOptions } from '../types';

export const react: PresetType = (options?: PresetOptions) => {
  return {
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
                    require.resolve('@babel/preset-env'),
                    { modules: 'commonjs' },
                  ],
                  require.resolve('@babel/preset-react'),
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
              loader: require.resolve('babel-loader'),
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
              [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
              require.resolve('@babel/preset-react'),
            ],
          },
        },
        {
          test: /\.(eot|md|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/i,
          exclude: [/node_modules/],
          loader: 'url-loader',
          options: {
            limit: 25000,
            name: '[name].[hash].[ext]',
            publicPath: '/static',
            outputPath: path.relative(
              options?.distFolder || process.cwd(),
              path.resolve(options?.staticFolder || process.cwd()),
            ),
          },
        },
        {
          test: /\.css$/i,
          use: [require.resolve('style-loader'), require.resolve('css-loader')],
        },
        {
          test: /\.txt$/i,
          use: require.resolve('raw-loader'),
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
};
