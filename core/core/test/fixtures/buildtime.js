const config = {
  stories: ['../../stories/src/blogs/*.mdx'],
  search: {
    indexingModule: require.resolve(
      '@component-controls/search-algolia/indexing',
    ),
    searchingModule: require.resolve('@component-controls/search-algolia'),
  },
};

export default config;
