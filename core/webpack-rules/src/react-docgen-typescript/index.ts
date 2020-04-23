import { WebpackRules } from '../types';

export const reactDocgenTypescript: WebpackRules = [
  {
    test: /\.(story|stories).(js|jsx|ts|tsx|mdx)$/,
    loader: '@component-controls/loader/loader',
    exclude: [/node_modules/],
    enforce: 'pre',
    options: {
      propsLoaders: [
        {
          name: '@component-controls/react-docgen-info',
          test: /\.(js|jsx)$/,
        },
        {
          name: '@component-controls/react-docgen-typescript-info',
          test: /\.(ts|tsx)$/,
        },
      ],
    },
  },
];
