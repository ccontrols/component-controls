const path = require('path');
const storyStorePlugin = require('@component-controls/loader/plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  presets:[
    {
      name: require.resolve('webpack-react-docgen-typescript/preset'),
      options: {
        fileNameResolver: ({ resourcePath, cacheFolder }) => path.join(cacheFolder, resourcePath.replace(/[^a-z0-9]/gi, '_')),
      },
    },  
    {
      name: path.resolve(path.dirname(require.resolve('@component-controls/storybook')), 'preset.js'),
      options: {
        legacy: true,
        addonPanel: true,
      },
    },  
  ],
  stories: [
    '../core/editors/src/**/*.stories.(js|tsx|mdx)',
    '../integrations/storybook/.storybook/stories/**/*.stories.(js|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-deps',
  ],
  webpackFinal: async (config, { configType }) => {
    return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.(story|stories).(js|jsx|ts|tsx)$/,
          loader: "@component-controls/loader/loader",
          exclude: [/node_modules/],
          enforce: 'pre',
          options: {
            type: 'csf'
          },
        },
        {
          test: /\.(story|stories).(mdx)$/,
          loader: "@component-controls/loader/loader",
          options: {
            type: 'mdx'
          },
        },
      ],
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
    plugins: [
      new storyStorePlugin(),
      ...config.plugins,
    ]
  }},
};
