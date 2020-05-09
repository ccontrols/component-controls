module.exports = {
  stories: [
    '../src/stories/**/*.stories.(js|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
    {
      name: '@component-controls/storybook',
      options: {
        pages: [],
      }
    },
    {
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          require.resolve('./page-classic.js'),
          require.resolve('./page-story.js'),
          require.resolve('./page-docs-blocks.js'),
          require.resolve('./page-component-blocks.js'),
          require.resolve('./page-mixed-blocks.js'),
        ]
      },
    }
  ],
};
