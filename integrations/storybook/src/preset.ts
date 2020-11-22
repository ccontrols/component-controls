/* eslint-disable @typescript-eslint/no-unused-vars */
const { mergeWebpackConfig } = require('@component-controls/webpack-configs');
const LoaderPlugin = require('@component-controls/loader/plugin');
import { PresetOptions, defaultRules } from './types';

module.exports = {
  config: (entry: any[] = [], options: PresetOptions = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  addons: (entry: any = {}) => {
    const { pages: customPages } = entry;
    const pages = customPages || [require.resolve('./full-page')];
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
      propsPanel = false,
      storySourcePanel = false,
      storyConfigPanel = false,
    } = options;
    if (propsPanel) {
      result.push(require.resolve('./register-props-panel'));
    }
    if (storySourcePanel) {
      result.push(require.resolve('./register-storysource-panel'));
    }
    if (storyConfigPanel) {
      result.push(require.resolve('./register-storyconfig-panel'));
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
      plugins: [
        ...mergedConfig.plugins,
        new LoaderPlugin({ defaultConfigPath: '.storybook' }),
      ],
    };
  },
};
