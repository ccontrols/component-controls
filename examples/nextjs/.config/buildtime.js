const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/authors/*.mdx',
    '../../stories/src/pages/*.mdx',
    '../../stories/src/tutorial/getting-started/ssg/*.mdx',
    '../../stories/src/tutorial/getting-started/*.mdx',
    '../../stories/src/tutorial/write-documentation/*.mdx',
    '../../stories/src/tutorial/design/tokens/*.mdx',
    '../../stories/src/tutorial/testing/*.mdx',
    '../../stories/src/tutorial/configuration/*.mdx',
    '../../stories/src/tutorial/reference/*.mdx',
    '../../stories/src/stories/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/stories_native/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/mdx-stories/*.mdx',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/components/src/**/*.mdx',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.mdx',
    '../../../ui/blocks/src/**/*.@(stories.@(js|jsx|tsx)|mdx)',
    '../../../ui/design-tokens/src/Colors/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/figma-embed/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-notes/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-images/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    // '../../stories/src/blogs/introduction-to-controls.mdx',
  ],
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9021'
      : `https://nextjs.component-controls.com`,
  pages: {
    story: {
      basePath: 'api/',
      tabs: {
        page: '@component-controls/pages/ClassicPage',
        test: '@component-controls/pages/TestingPage',
        design: '@component-controls/pages/DesignPage',
      },
    },
    tutorial: {
      basePath: 'tutorial/',
    },
  },
  search: {
    fields: ['title', 'description', 'source', 'tags', 'components'],
    emptySearchDocuments: [
      'Getting started/Site generators/Gatsby',
      'Getting started/Site generators/Nextjs',
      'Getting started/Documentation site',
      'Writing Documentation/ESM Stories',
      'Getting started/UI customization',
      'Writing Documentation/MDX Documentation',
      'Writing Documentation/MDX Stories',
    ],
    options: {
      isCaseSensitive: true,
    },
  },
  webpack: (config = {}, options = {}) => {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        //new BundleAnalyzerPlugin({ generateStatsFile: true, statsFilename: 'stats.json' })
      ],
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
  },
};
