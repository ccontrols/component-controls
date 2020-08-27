const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
    {
      name: '@component-controls/storybook',
      options: {
        propsPanel: true,
        storySourcePanel: true,
        storyConfigPanel: true,
      }
    }  
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
