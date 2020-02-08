module.exports = {
  stories: [
    '../../core/**/*.stories.(js|tsx|mdx)',
    './stories/**/*.stories.(js|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    '@component-controls/storybook',
  ],
  webpackFinal: async (config, { configType }) => ({
    ...config,
    module: {
      ...config.module,
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
    },
  }),
};
