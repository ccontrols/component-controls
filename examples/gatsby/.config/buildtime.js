const path = require('path');
const { defaultBuildConfig } = require('@component-controls/core');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/authors/*.mdx',
    '../../stories/src/pages/*.mdx',
    '../../stories/src/tutorial/getting-started/ssg/*.mdx',
    '../../stories/src/tutorial/getting-started/*.mdx',
    '../../stories/src/tutorial/write-documentation/*.mdx',
    '../../stories/src/tutorial/testing/*.mdx',
    '../../stories/src/tutorial/configuration/*.mdx',
    '../../stories/src/tutorial/reference/*.mdx',
    '../../stories/src/stories/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/mdx-stories/*.mdx',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    //'../../stories/src/blogs/introduction-to-controls.mdx',
    //'../../stories/src/stories/controls-editors-starter.stories.tsx',
    //'../../stories/src/blogs/gatsby-nextjs-storybook.mdx',
    
  ],
  pages: {
    story: {
      basePath: 'api/',
      tabs: [...defaultBuildConfig.pages.story.tabs, { route: 'test' }],
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
  instrument: {
    components: {
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
    },
  }
};
