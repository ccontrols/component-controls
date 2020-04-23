/* eslint-disable @typescript-eslint/no-unused-vars */
const storyStorePlugin = require('@component-controls/loader/plugin');
const { getRules } = require('@component-controls/webpack-rules');
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
    const { controlsPanel = true, propsPanel = false } = options;
    if (controlsPanel) {
      result.push(require.resolve('./register-controls-panel'));
    }
    if (propsPanel) {
      result.push(require.resolve('./register-props-panel'));
    }

    return result;
  },
  webpackFinal: (config: any = {}, options: PresetOptions = {}) => {
    const rules = getRules(options?.webpackRules || defaultRules);
    debugger;
    const result = {
      ...config,
      module: {
        ...config.module,
        rules: [...config.module.rules, ...rules],
      },
      plugins: [new storyStorePlugin(), ...config.plugins],
    };
    return result;
  },
};
