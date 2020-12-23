require('dotenv').config();

export default {
  files: 'docs/**/*.{md,mdx,markdown}',
  title: 'Docz & Netlify CMS',
  siteUrl: 'https://docz-migration.netlify.app',
  search: {
    indexingModule: require.resolve(
      '@component-controls/search-algolia/indexing',
    ),
    searchingModule: '@component-controls/search-algolia',
    options: {
      saveIndex: true, // turn to false when no more needed to re-index algolia search
      indexName: process.env.ALGOLIA_SEARCH_INDEX_NAME,
      appID: process.env.ALGOLIA_SEARCH_APP_ID,
      searchAPIKey: process.env.ALGOLIA_SEARCH_SEARCH_KEY,
      adminAPIKey: process.env.ALGOLIA_SEARCH_ADMIN_KEY,
    },
  },

  menu: [
    {
      name: 'Quick Start',
      menu: [''],
    },
    {
      name: 'Getting Started',
      menu: ['Manual Installation'],
    },
    {
      name: 'Configuration',
    },
    'Components',
  ],
};
