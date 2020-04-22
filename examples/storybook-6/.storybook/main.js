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
        include: [path.resolve('../../stries/src')],
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
        loader: {
          components: {
            storeSourceFile: true, //false
            resolveFile: (componentName, filePath) => {
              if (filePath.includes('/theme-ui/dist')) {
                return `${
                  filePath.split('/theme-ui/dist')[0]
                }/@theme-ui/components/src/${componentName}.js`;
              } else if (
                filePath.includes('@component-controls/storybook/dist')
              ) {
                return path.resolve(
                  path.dirname(filePath),
                  `../src/blocks/${componentName}.tsx`,
                );
              }
              return filePath;
            },
          },
        }
      }
    }  
  ],
};
