module.exports = () => {
  return {
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-typescript',
    ].filter(Boolean),
  };
};
