import { Configuration } from 'webpack';

export const instrument: Configuration = {
  module: {
    rules: [
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
        test: /\.(md|mdx)$/,
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
        test: /\.(md|mdx)$/,
        exclude: [/node_modules/],
        loader: '@component-controls/loader/loader',
        options: {
          mdx: {
            transformMDX: true,
          },
        },
      },
      {
        test: /\.(story|stories).(js|jsx|ts|tsx)$/,
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
