import { Configuration } from 'webpack';

export const reactDocgen: Configuration = {
  module: {
    rules: [
      {
        test: /\.mdx$/i,
        exclude: [/node_modules/],
        loader: '@component-controls/loader/loader',
        enforce: 'pre',
        options: {
          propsLoaders: [
            {
              name: '@component-controls/react-docgen-info',
              test: /\.(js|jsx|ts|tsx)$/,
            },
          ],
        },
      },
      {
        test: /\.(story|stories).(js|jsx|ts|tsx)$/,
        loader: '@component-controls/loader/loader',
        exclude: [/node_modules/],
        enforce: 'pre',
        options: {
          propsLoaders: [
            {
              name: '@component-controls/react-docgen-info',
              test: /\.(js|jsx|ts|tsx)$/,
            },
          ],
        },
      },
    ],
  },
};
