const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  
  addons: [{
    name: '@component-controls/storybook',
    options: {
      pages: [
        require.resolve('@component-controls/storybook/full-page'),
        require.resolve('./testing-page.js'),
      ],
      webpack: ['instrument',
      {
        name: 'react-docgen-typescript', 
        config: {
          module: {
            rules: [
              {
                loader: '@component-controls/loader/loader',
                options: {
                  stories: {
                    sourceFiles: false, //
                  },
                },  
              },
            ],
          }
        },  
      }],
    }
  }],    
  stories: [
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/design-tokens/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|tsx|mdx)',
    // '../../stories/src/tutorial/parts/controls.mdx',
    // '../../stories/src/blogs/introduction-to-controls.mdx',
    //'../../tutorial/src/docs/first-story.mdx',
  ],
  webpackFinal: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        // new BundleAnalyzerPlugin({ generateStatsFile: true, statsFilename: 'stats.json' })
      ]
    };
  },

};
