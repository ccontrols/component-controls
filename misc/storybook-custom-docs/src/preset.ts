module.exports = {
  config: (entry: any[] = []) => {
    return [...entry, require.resolve('./preview')];
  },
  managerEntries: (entry: any[] = []) => {
    return [...entry, require.resolve('./manager')];
  },
  webpackFinal: (config: any = {}, options: any = {}) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: require.resolve('./preview'),
            loader: require.resolve('./preview-loader'),
            options,
          },
        ],
      },
    };
  },
  managerWebpack: (config: any = {}, options: any = {}) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: require.resolve('./manager'),
            loader: require.resolve('./manager-loader'),
            options,
          },
        ],
      },
    };
  },
};
