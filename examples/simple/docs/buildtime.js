const { defaultBuildConfig } = require('@component-controls/core');

module.exports = {
  stories: ['./src/*.@(mdx|tsx)'],
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  cssFileName: 'globals.css',
  pages: {
    story: {
      ...defaultBuildConfig.pages.story,
      tabs: [
        ...defaultBuildConfig.pages.story.tabs,
        {
          route: 'test',
          title: 'Testing',
          template: require.resolve('./TestingPage.tsx'),
        },
        {
          route: 'ally',
          title: 'A11Y',
          template: '@component-controls/axe-plugin/AllyPage',
        },
        {
          route: 'viewport',
          title: 'Viewport',
          template: '@component-controls/viewport-plugin/ViewportPage',
        },
      ],
    },
  },
};
