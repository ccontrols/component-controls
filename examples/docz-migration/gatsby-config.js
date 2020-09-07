module.exports = {
  siteMetadata: {
    siteUrl: 'https://component-controls.com',
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: '@component-controls/gatsby-theme-stories',
      options: {
        configPath: '.',
      },
    },
  ],
};
