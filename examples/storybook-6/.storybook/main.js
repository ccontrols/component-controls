const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/catalogs/*.mdx',
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/design-tokens/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-stats/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-catalog/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: false,
      },
    },
    {
      name: '@component-controls/storybook',
      options: {
        pages: [
          require.resolve('@component-controls/storybook/full-page'),
          require.resolve('./testing-page'),
          require.resolve('./design-page'),
        ],
        // propsPanel: true,
        // storySourcePanel: true,
        // storyConfigPanel: true,
      },
    },
  ],
  webpackFinal: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        // new BundleAnalyzerPlugin({ generateStatsFile: true, statsFilename: 'stats.json' })
      ],
    };
  },
};
