const path = require('path');
const storyStorePlugin = require('@component-controls/loader/plugin');

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
    '../../../ui/editors/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/block-components/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.(js|tsx|mdx)',
    '../src/**/*.stories.(js|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    'storybook-dark-mode',
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
            type: 'csf',
            propsLoaders: [
              { name: '@component-controls/react-docgen-info', use: /\.(js|jsx)$/},
              { name: '@component-controls/react-docgen-typescript-info', use: /\.(ts|tsx)$/}
            ],
            prettier: {
              tabWidth: 4,
            },
            components: {
              storeSourceFile: true, //false
              resolveFile: (componentName, filePath) => {
                if (filePath.includes('/theme-ui/dist')) {
                  return `${
                    filePath.split('/theme-ui/dist')[0]
                  }/@theme-ui/components/src/${componentName}.js`;
                } else if (filePath.includes('@component-controls/storybook/dist')) {
                  return path.resolve(path.dirname(filePath), `../src/blocks/${componentName}.tsx`)
                }
                return filePath;
              },
            },
            stories: {
              storeSourceFile: true, //false
            },

          },
        },
        {
          test: /\.(story|stories).(mdx)$/,
          loader: "@component-controls/loader/loader",
          exclude: [/node_modules/],
          options: {
            type: 'mdx',
            propsLoaders: [
              { name: '@component-controls/react-docgen-info', use: /\.(js|jsx)$/},
              { name: '@component-controls/react-docgen-typescript-info', use: /\.(ts|tsx)$/}
            ],
          },
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
    },
    plugins: [
      new storyStorePlugin(),
      ...config.plugins,
    ]
  }},
};
