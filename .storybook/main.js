const path = require('path');

module.exports = {
  stories: [
    '../core/**/*.stories.(js|tsx|mdx)',
  ],
  presets: [
    
    'webpack-react-docgen-typescript/preset'
  ],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async (config, { configType }) => ({
    ...config,
    module: {
      ...config.module,
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
      alias: {...config.resolve.alias, ...{
        "@storybook/addon-docs": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "addon-docs"),
        "@storybook/theming": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "theming"),
        "@emotion/core": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@emotion", "core"),
        "@emotion/styled": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@emotion", "styled"),
      }}
    },
  }),
};
