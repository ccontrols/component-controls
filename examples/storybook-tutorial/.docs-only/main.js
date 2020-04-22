const path = require('path');

module.exports = {
  stories: [
    '../../stories/src/**/*.stories.(js|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve('../../stries/src')],
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    return {
    ...config,
    module: {
      ...config.module,
    },
  }},
};
