module.exports = () => {
  return {
    siteMetadata: {
      siteTitle: `Stories`,
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-typescript',
    ].filter(Boolean),
  };
};
