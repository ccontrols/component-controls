module.exports = {
  stories: ['./src/*.@(mdx|tsx)'],
  siteUrl: `https://component-controls-gatsby.netlify.app`,
  cssFileName: 'globals.css',
  loaders: {
    'css-loader': {
      modules: true,
    },
  },
};
