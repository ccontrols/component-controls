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
    const { addonPanel = true } = options;
    if (addonPanel) {
      result.push(require.resolve('./register-panel'));
    }  
    return result;
  },
};
