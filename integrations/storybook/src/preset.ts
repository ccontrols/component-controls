/* eslint-disable @typescript-eslint/no-unused-vars */
const storyStorePlugin = require('@component-controls/loader/plugin');

module.exports = {
  config: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
  managerEntries: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    result.push(require.resolve('./register'));
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
