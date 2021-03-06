import path from 'path';
import { BuildConfiguration } from '@component-controls/core';
require('dotenv').config();
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//  .BundleAnalyzerPlugin;

const config: BuildConfiguration = {
  stories: [
    '../../stories/src/blogs/*.mdx',
    '../../stories/src/showcase/*.mdx',
    '../../stories/src/authors/*.mdx',
    '../../stories/src/pages/*.mdx',
    '../../stories/src/tutorial/getting-started/ssg/*.mdx',
    '../../stories/src/tutorial/getting-started/*.mdx',
    '../../stories/src/tutorial/write-documentation/*.mdx',
    '../../stories/src/tutorial/design/*.mdx',
    '../../stories/src/tutorial/design/tokens/*.mdx',
    '../../stories/src/tutorial/testing/*.mdx',
    '../../stories/src/tutorial/configuration/*.mdx',
    '../../stories/src/tutorial/reference/*.mdx',
    '../../stories/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/stories_native/*.stories.@(js|jsx|tsx|mdx)',
    '../../stories/src/mdx-stories/*.mdx',
    '../../stories/src/catalogs/*.mdx',
    '../../../ui/components/src/**/*.mdx',
    '../../../ui/components/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/blocks/src/**/*.mdx',
    '../../../ui/blocks/src/**/*.@(stories.@(js|jsx|tsx)|mdx)',
    '../../../ui/design-tokens/src/Colors/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../core/core/src/stories/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/editors/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/axe-plugin/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/viewport-plugin/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-stats/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-catalog/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/figma-embed/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-notes/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../plugins/addon-images/src/**/*.stories.@(js|jsx|tsx|mdx)',
    '../../../ui/app/src/**/*.stories.@(js|jsx|tsx|mdx)',
  ],
  siteUrl:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:9020'
      : 'https://component-controls.com',
  pages: {
    story: {
      basePath: 'api/',
    },
    tutorial: {
      basePath: 'tutorial/',
    },
    showcase: {
      basePath: 'showcase/',
    },
  },
  search: {
    indexingModule: require.resolve(
      '@component-controls/search-algolia/indexing',
    ),
    searchingModule: require.resolve('@component-controls/search-algolia'),
    fields: ['title', 'description', 'source', 'tags', 'components'],
    emptySearchDocuments: [
      'Getting started/Site generators/Gatsby',
      'Getting started/Site generators/Nextjs',
      'Getting started/Site generators/Webpack',
      'Getting started/Documentation site',
      'Writing Documentation/ESM Stories',
      'Getting started/UI customization',
      'Writing Documentation/MDX Documentation',
      'Writing Documentation/MDX Stories',
    ],
    options: {
      saveIndex: true, // turn to false when no more needed to re-index algolia search
      indexName: process.env.ALGOLIA_SEARCH_INDEX_NAME,
      appID: process.env.ALGOLIA_SEARCH_APP_ID,
      searchAPIKey: process.env.ALGOLIA_SEARCH_SEARCH_KEY,
      adminAPIKey: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    },
  },
  tokens: {
    githubAccessToken: process.env.GITHUB_AUTH_TOKEN,
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

export default config;
