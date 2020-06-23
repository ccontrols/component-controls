const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/authors/*.mdx',
    '../../stories/src/tutorial/*.mdx',
    '../../stories/src/stories/*.stories.(js|jsx|tsx|mdx)',
    '../src/stories/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.(js|jsx|tsx|mdx)',
  ],
  pages: {
    story: {
      basePath: 'api/',
      tabs: [{ route: 'page' }, { route: 'test' }, { route: 'viewport' }],
    },
    blog: {
      basePath: 'blogs/',
    },
    tutorial: {
      basePath: 'tutorial/',
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
