const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  siteRoot: '/root/',
  stories: ['../src/docs/*.mdx', '../src/**/*.docs.@(tsx|jsx|ts|js)'],

  webpack: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        // new BundleAnalyzerPlugin()
      ],
    };
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
  },
};
