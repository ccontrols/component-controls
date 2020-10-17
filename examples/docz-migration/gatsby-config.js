module.exports = {
  siteMetadata: {
    siteUrl: 'https://docz-migration.netlify.app',
  },
  plugins: [
    {
      resolve: '@component-controls/gatsby-theme-stories',
      options: {
        configPath: '.',
      },
    },
  ],
};
