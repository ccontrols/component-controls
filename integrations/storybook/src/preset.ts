/* eslint-disable @typescript-eslint/no-unused-vars */
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
    };
    return result;
  },
};
