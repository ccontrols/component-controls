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
        test: /\.(eot|md|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(eot|md|svg|ico|jpg|jpeg|png|gif|ttf|woff|woff2|pdf|mp4|web|wav|mp3|m4a|aac|oga)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[hash].[ext]',
          },
        },
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
        test: /\.txt$/i,
        use: require.resolve('raw-loader'),
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
        test: /\.(md|mdx)$/i,
        exclude: [/node_modules/],
        loader: '@component-controls/loader/loader',
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
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};
