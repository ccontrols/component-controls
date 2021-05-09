import { BuildConfiguration } from '@component-controls/core';

const config: BuildConfiguration = {
  stories: ['../../stories/src/blogs/*.mdx'],
  search: {
    indexingModule: require.resolve(
      '@component-controls/search-algolia/indexing',
    ),
    searchingModule: require.resolve('@component-controls/search-algolia'),
  },
};

export default config;
