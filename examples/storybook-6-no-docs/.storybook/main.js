const path = require('path');
const storyStorePlugin = require('@component-controls/loader/plugin');

module.exports = {
  presets:[
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
    '../../../ui/blocks/src/**/*.stories.(js|tsx|mdx)',
    '../../stories/src/**/*.stories.(js|tsx|mdx)',
  ],
  webpackFinal: async (config, { configType }) => {
    return {
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.js$/,
          include: new RegExp(`node_modules\\${path.sep}acorn-jsx`),
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [[require.resolve('@babel/preset-env'), { modules: 'commonjs' }]],
              },
            },
          ],
        },
        {
          test: /\.(stories|story).mdx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [[require.resolve('@babel/preset-env'), { modules: 'commonjs' }], require.resolve('@babel/preset-react')],
              },
            },
          ],
        },
        {
          test: /\.(ts|tsx)$/,
          use: [{
            loader: require.resolve('babel-loader'),
            options: {
              presets: [['react-app', { flow: false, typescript: true }]]
            }
          }]
        },
        {
          test: /\.mdx$/,
          exclude: /\.(stories|story).mdx$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [[require.resolve('@babel/preset-env'), { modules: 'commonjs' }]],
              },
            },
          ],
        },
        {
          test: /\.(story|stories).(js|jsx|ts|tsx|mdx)$/,
          loader: "@component-controls/loader/loader",
          exclude: [/node_modules/],
          enforce: 'pre',
          options: {
            mdx: {
              transformMDX: true,
            },  
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
    plugins: [
      new storyStorePlugin(),
      ...config.plugins,
    ]
  }},
};
