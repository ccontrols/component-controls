module.exports = {
  siteMetadata: {
    siteUrl: 'https://component-controls.com',
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
