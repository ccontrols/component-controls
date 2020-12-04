import path from 'path';
import { mergeWebpackConfig } from '@component-controls/webpack-configs';
const LoaderPlugin = require('@component-controls/loader/plugin');
import { PresetOptions, defaultRules } from './types';

const toPath = (p: string) => path.join(process.cwd(), p);

module.exports = {
  config: (entry: any[] = []) => {
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
      {},
    );
    const newConfig = {
      ...mergedConfig,
      plugins: [
        ...(mergedConfig.plugins as any),
        new LoaderPlugin({ defaultConfigPath: '.storybook' }),
      ],
    };
    if (config._version > '6.0.0') {
      newConfig.resolve = {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      };
    }
    return newConfig;
  },
};
