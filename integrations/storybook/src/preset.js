module.exports = {
  config: (entry = [], options = {}) => {
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
    const { legacy = false } = options;
    if (legacy) {
      result.push(require.resolve('./config-legacy'));
    }

    return result;
  },
  managerEntries: (entry = [], options = {}) => {
    const { addonPanel = true } = options;
    if (addonPanel) {
      return [...entry, require.resolve('./manager/register')];
    }
    return entry;
  },
};
