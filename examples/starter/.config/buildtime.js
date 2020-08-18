const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { defaultBuildConfig } = require('@component-controls/core');
module.exports = {
  stories: [
    '../src/docs/*.@(mdx|tsx)',
  ],
  webpack: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        // new BundleAnalyzerPlugin()
      ]
    };
  },
  pages: {
    story: {
      tabs: [
        ...defaultBuildConfig.pages.story.tabs,
        // new viewport tab
        { route: 'viewport' },
      ],
    },
  },
  instrument: {
    components: {
      package: {
        browseLink: true,
      },
      resolveFile: (componentName, filePath) => {
        if (filePath.includes('theme-ui/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../../@theme-ui/components/index.d.ts`,
          );
          return resolved;
        }
        return filePath;
      },
      sourceFiles: (componentName, filePath) => {
        if (filePath.includes('theme-ui/dist')) {
          const resolved = path.resolve(
            path.dirname(filePath),
            `../../@theme-ui/components/src/${componentName}.js`,
          );
          return resolved;
        }
        return filePath;
      },
    },
  }
};