const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  
  addons: [{
    name: '@component-controls/storybook',
    options: {
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
                    storeSourceFile: false, //or false
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
    '../../../ui/editors/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.(js|tsx|mdx)',
    '../../../core/specification/src/stories/**/*.stories.(js|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.(js|tsx|mdx)',
    '../../stories/src/**/*.stories.(js|tsx|mdx)',
    '../stories/**/*.stories.(js|tsx|mdx)',
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
