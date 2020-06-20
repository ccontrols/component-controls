import { Configuration } from 'webpack';

export const react: Configuration = {
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
                [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
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
        test: /\.mdx$/,
        exclude: [/node_modules/],
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
          {
            loader: '@component-controls/loader/loader',
            options: {
              mdx: {
                transformMDX: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(story|stories).(js|jsx|ts|tsx)$/,
        loader: '@component-controls/loader/loader',
        exclude: [/node_modules/],
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
