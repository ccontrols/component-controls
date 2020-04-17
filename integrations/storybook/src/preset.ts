/* eslint-disable @typescript-eslint/no-unused-vars */
const storyStorePlugin = require('@component-controls/loader/plugin');

module.exports = {
  config: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  addons: (entry: any = {}) => {
    const { pages = [] } = entry;
    debugger;
    return [
      {
        name: '@component-controls/storybook-custom-docs',
        options: {
          pages: [require.resolve('./full-page'), ...pages],
        },
      },
    ];
  },
  managerEntries: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    const { addonPanel = true } = options;
    if (addonPanel) {
      result.push(require.resolve('./register-panel'));
    }
    return result;
  },
  webpack: (webpackConfig: any = {}, options: any = {}) => {
    const result = {
      ...webpackConfig,
      plugins: [new storyStorePlugin(), ...webpackConfig.plugins],
    };
    return result;
  },
};
