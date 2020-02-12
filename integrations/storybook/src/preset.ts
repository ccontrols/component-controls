module.exports = {
  config: (entry: any[] = [], options: any = {}) => {
    const result = [...entry];
    const { legacy = false } = options;
    if (legacy) {
      result.push(require.resolve('./config-legacy'));
    }

    const { docsPreview = true } = options;
    if (!legacy && docsPreview) {
      result.push(require.resolve('./config-preview'));
    }
    const { docsProps = true } = options;
    if (docsProps) {
      result.push(require.resolve('./config-props-table'));
    }
    const { smart = true } = options;
    if (!legacy && smart) {
      result.push(require.resolve('./config-smart'));
    }
    return result;
  },
  managerEntries: (entry: any[] = [], options: any = {}) => {
    const { addonPanel = true } = options;
    if (addonPanel) {
      return [...entry, require.resolve('./register.esm')];
    }
    return entry;
  },
};
