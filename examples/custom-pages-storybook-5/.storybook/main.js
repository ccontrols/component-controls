module.exports = {
  stories: [
    '../src/stories/**/*.stories.(js|mdx)',
  ],
  addons: [
    {
      name: '@component-controls/storybook-custom-docs',
      options: {
        pages: [
          require.resolve('./page-story.js'),
        ]
      },
    }
  ],
};
