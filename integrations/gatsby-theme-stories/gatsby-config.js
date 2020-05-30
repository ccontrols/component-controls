module.exports = options => {
  return {
    siteMetadata: {
      siteTitle: `Stories`,
      siteTitleAlt: `Component controls stories - @lekoarts/gatsby-theme-graphql-playground`,
      siteHeadline: `Component controls stories - Gatsby Theme from @atanasster`,
      siteUrl: `https://gatsby-theme-stories.netlify.com`,
      siteDescription: `Component controls stories. Write your components documentation with MDX and JSX and design, develop, test and review in a single site.`,
      siteLanguage: `en`,
      author: `@atanasster`,
      graphiQLUrl: `https://gatsby-theme-stories.netlify.com/___graphql`,
      basePath: options.basePath,
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-typescript',
    ].filter(Boolean),
  };
};
