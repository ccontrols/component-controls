module.exports = {
  config: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    const { docsPreview = true } = options;
    if (docsPreview) {
      result.push(require.resolve('./config-preview'));
    }
    const { docsProps = true } = options;
    if (docsProps) {
      result.push(require.resolve('./config-props-table'));
    }
    const { smart = true } = options;
    if (smart) {
      result.push(require.resolve('./config-smart'));
    }
    return result;
  },
  managerEntries: (entry: any[] = [], options: any = {}) => {
    const { addonPanel = true } = options;
    if (addonPanel) {
      return [...entry, require.resolve('./register')];
    }
    return entry;
  },
};
