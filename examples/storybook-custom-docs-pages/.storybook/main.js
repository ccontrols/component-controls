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
        docsPage: false,
      }
    },
    { 
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          require.resolve('./page-simple.tsx'),
          require.resolve('./page-docs-blocks.tsx'),
          require.resolve('./page-component-blocks.tsx'),
          require.resolve('./page-mixed-blocks.tsx'),
        ]
      },
    }
  ],
};
