/* eslint-disable @typescript-eslint/no-unused-vars */
const storyStorePlugin = require('@component-controls/loader/plugin');
const merge = require('deepmerge');
import { PresetOptions } from './types';

module.exports = {
  config: (entry: any[] = [], options: PresetOptions = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  addons: (entry: any = {}) => {
    const { pages: customPages = [], docsPage = true } = entry;
    const pages = docsPage
      ? [require.resolve('./full-page'), ...customPages]
      : customPages;
    if (pages.length) {
      return [
        {
          name: '@component-controls/storybook-custom-docs',
          options: {
            pages,
          },
        },
      ];
    }
    return [];
  },
  managerEntries: (entry: any[] = [], options: PresetOptions = {}) => {
    const result = [...entry];
    const { addonPanel = true } = options;
    if (addonPanel) {
      result.push(require.resolve('./register-panel'));
    }
    return result;
  },
  webpackFinal: (config: any = {}, options: PresetOptions = {}) => {
    const result = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.(story|stories).(js|jsx|ts|tsx|mdx)$/,
            loader: '@component-controls/loader/loader',
            exclude: [/node_modules/],
            enforce: 'pre',
            options: merge(
              {
                propsLoaders: [
                  {
                    name: '@component-controls/react-docgen-info',
                    test: /\.(js|jsx)$/,
                  },
                  {
                    name: '@component-controls/react-docgen-typescript-info',
                    test: /\.(ts|tsx)$/,
                  },
                  ,
                ],
              },
              options?.instrument || {},
            ),
          },
        ],
      },
      plugins: [new storyStorePlugin(), ...config.plugins],
    };
    return result;
  },
};
