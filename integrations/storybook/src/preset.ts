module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  config: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    result.push(require.resolve('./config'));
    return result;
  },
};
