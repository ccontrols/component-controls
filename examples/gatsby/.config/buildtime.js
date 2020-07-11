const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/authors/*.mdx',
    '../../stories/src/pages/*.mdx',
    '../../stories/src/tutorial/getting-started/*.mdx',
    '../../stories/src/tutorial/write-documentation/*.mdx',
    '../../stories/src/tutorial/configuration/*.mdx',
    '../../stories/src/tutorial/parts/*.mdx',
    '../../stories/src/stories/*.stories.@(js|jsx|tsx|mdx)',
    '../src/stories/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    // '../../stories/src/blogs/introduction-to-controls.mdx',
  ],
  pages: {
    story: {
      basePath: 'api/',
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
