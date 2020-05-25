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
      {
        test: /\.(story|stories).(js|jsx|ts|tsx|mdx)$/,
        loader: '@component-controls/loader/loader',
        exclude: [/node_modules/],
        enforce: 'pre',
        options: {
          mdx: {
            transformMDX: true,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
