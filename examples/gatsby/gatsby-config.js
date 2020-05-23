module.exports = {
  siteMetadata: {
    title: 'Component Controls Gatsby Starter',
    author: 'Atanas Stoyanov',
    description: 'A sample site to showcase gatsby stories loading.',
    siteUrl: 'https://components-storybook-6-no-docs.netlify.app',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion',
    {
      resolve: '@component-controls/gatsby-plugin-stories',
      options: {
        config: '.config',
      },
    },
  ],
};
