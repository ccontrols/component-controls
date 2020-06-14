const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../../core/specification/src/stories/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/app-components/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.(js|jsx|tsx|mdx)',
    '../../stories/src/**/*.stories.(js|jsx|tsx|mdx)',
    '../stories/**/*.stories.(js|jsx|tsx|mdx)',
  ],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json'),
        },
        include: [path.resolve('../../stries/src')],
      },
    },
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
