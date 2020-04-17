/* eslint-disable @typescript-eslint/no-unused-vars */
const storyStorePlugin = require('@component-controls/loader/plugin');

module.exports = {
  config: (entry: any[] = [], options: any = {}) => {
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
