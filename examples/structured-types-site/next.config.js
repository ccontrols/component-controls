const withStories = require('@component-controls/nextjs-plugin/build');

module.exports = withStories({
  future: {
    webpack5: true,
  },
  configPath: '.config',
});
