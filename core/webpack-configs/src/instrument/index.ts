import { Configuration } from 'webpack';

export const instrument: Configuration = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
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
            ['@babel/preset-env', { modules: 'commonjs' }],
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.mdx$/i,
        exclude: [/node_modules/],
        loader: '@component-controls/loader/loader',
        enforce: 'pre',
        options: {
          mdx: {
            transformMDX: true,
            storybookExports: true,
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
