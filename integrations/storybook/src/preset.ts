/* eslint-disable @typescript-eslint/no-unused-vars */
const { mergeWebpackConfig } = require('@component-controls/webpack-configs');
import { PresetOptions, defaultRules } from './types';

module.exports = {
  config: (entry: any[] = [], options: PresetOptions = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  addons: (entry: any = {}) => {
    const { pages: customPages } = entry;
    const pages = customPages || [
      require.resolve('./full-page'),
      require.resolve('./testing-page'),
    ];
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
    const {
      controlsPanel = true,
      propsPanel = false,
      storySourcePanel = false,
    } = options;
    if (controlsPanel) {
      result.push(require.resolve('./register-controls-panel'));
    }
    if (propsPanel) {
      result.push(require.resolve('./register-props-panel'));
    }
    if (storySourcePanel) {
      result.push(require.resolve('./register-storysource-panel'));
    }
    return result;
  },
  webpackFinal: (config: any = {}, options: PresetOptions = {}) => {
    const mergedConfig = mergeWebpackConfig(
      config,
      options?.webpack || defaultRules,
    );
    return {
      ...mergedConfig,
      module: {
        ...mergedConfig.module,
        rules: [
          {
            test: /story-store-data\.js$/,
            loader: require.resolve(
              '@component-controls/loader/dist/runtimeLoader.js',
            ),
            enforce: 'post',
          },
          ...mergedConfig.module.rules,
        ],
      },
    };
  },
};
