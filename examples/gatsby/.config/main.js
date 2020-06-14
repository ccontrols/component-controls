const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/stories/*.stories.(js|jsx|tsx|mdx)',
    '../src/stories/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
  ],
  pages: {
    story: {
      basePath: 'api/',
    },
    blog: {
      basePath: 'blogs/',
    },
  },
  webpack: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        //new BundleAnalyzerPlugin({ generateStatsFile: true, statsFilename: 'stats.json' })
      ]
    };
  },

};
