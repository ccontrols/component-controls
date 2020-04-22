import * as path from 'path';
import { WebpackRules } from '../types';

export const instrument: WebpackRules = [
  {
    test: /\.js$/,
    include: new RegExp(`node_modules\\${path.sep}acorn-jsx`),
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
          ],
        },
      },
    ],
  },
  {
    test: /\.(stories|story).mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
            require.resolve('@babel/preset-react'),
          ],
        },
      },
    ],
  },
  {
    test: /\.(ts|tsx)$/,
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
    test: /\.mdx$/,
    exclude: /\.(stories|story).mdx$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
          ],
        },
      },
    ],
  },
];
