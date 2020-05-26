module.exports = {
  siteMetadata: {
    siteTitle: 'Component Controls Gatsby Starter',
    author: 'Atanas Stoyanov',
    description: 'A sample site to showcase gatsby stories loading.',
    siteUrl: 'https://components-storybook-6-no-docs.netlify.app',
  },
  plugins: [
    {
      resolve: '@component-controls/gatsby-theme-stories',
      options: {
        configPath: '.config',
      },
    },
  ],
};
