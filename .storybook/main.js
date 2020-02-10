const path = require('path');

module.exports = {
  presets:[
    {
      name: require.resolve('webpack-react-docgen-typescript/preset'),
      options: {
        fileNameResolver: ({ resourcePath, cacheFolder }) => path.join(cacheFolder, resourcePath.replace(/[^a-z0-9]/gi, '_')),
      },
    },  
  ],
  stories: [
    '../core/editors/src/**/*.stories.(js|tsx|mdx)',
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
        "@storybook/components": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "components"),
        "@storybook/theming": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@storybook", "theming"),
        "@emotion/core": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@emotion", "core"),
        "@emotion/styled": path.resolve(path.resolve(__dirname, '..'), "node_modules", "@emotion", "styled"),
      }}
    },
  }),
};
