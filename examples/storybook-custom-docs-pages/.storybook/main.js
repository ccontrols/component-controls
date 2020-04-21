const path = require('path');

module.exports = {
  stories: [
    '../../../ui/editors/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.(js|tsx|mdx)',
    '../../stories/src/**/*.stories.(js|tsx|mdx)',
    '../stories/**/*.stories.(js|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
      },
    },
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@component-controls/storybook',
      options: {
        addonPanel: false,
        docsPage: false,
      },
    },
    { 
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          require.resolve('./page-simple.tsx'),
          require.resolve('./page-docs-blocks.tsx'),
          require.resolve('./page-component-blocks.tsx'),
          require.resolve('./page-mixed-blocks.tsx')
        ]
      },
    }
  ],
  webpackFinal: async (config, { configType }) => {
    return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules, 
        {
          test: /\.(story|stories).(js|jsx|ts|tsx|mdx)$/,
          loader: "@component-controls/loader/loader",
          exclude: [/node_modules/],
          enforce: 'pre',
          options: {
            propsLoaders: [
              { name: '@component-controls/react-docgen-info', test: /\.(js|jsx)$/},
              { name: '@component-controls/react-docgen-typescript-info', test: /\.(ts|tsx)$/}
            ],
            prettier: {
              tabWidth: 2,
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
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...(config.resolve.extensions || []), '.ts', '.tsx'],
    },
  }},
};
