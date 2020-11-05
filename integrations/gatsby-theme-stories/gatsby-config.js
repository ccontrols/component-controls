module.exports = () => {
  return {
    plugins: ['gatsby-plugin-theme-ui', 'gatsby-plugin-typescript'].filter(
      Boolean,
    ),
  };
};
