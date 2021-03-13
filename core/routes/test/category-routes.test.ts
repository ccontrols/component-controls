import {
  getDefaultStore,
  defaultBuildConfig,
  defaultRunConfig,
  deepMerge,
  Store,
} from '@component-controls/core';
import { getHomePages } from '../src/routes';

describe('category-routes', () => {
  const store: Store = {
    ...getDefaultStore(),
    ...{
      config: deepMerge(defaultBuildConfig, defaultRunConfig),
      docs: {
        'doc/doc-1': {
          title: 'doc/doc-1',
          tags: ['tag-1'],
          stories: ['story-1', 'story-2'],
        },
        'doc/doc-2': {
          title: 'doc/doc-2',
          tags: ['tag-1', 'tag-2'],
          stories: ['story-3', 'story-4'],
        },
      },
      stories: {},
    },
  };
  it('tags pages', () => {
    const paths = getHomePages(store);

    expect(paths[0]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs',
      storyId: 'story-1',
      type: 'story',
    });
    expect(paths[1]).toMatchObject({
      path: '/tags',
      type: 'tags',
    });
  });
  it('tags pages with siteRoot', () => {
    const paths = getHomePages({
      ...store,
      config: { ...store.config, siteRoot: '/root/' },
    });

    expect(paths[0]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/root/docs',
      storyId: 'story-1',
      type: 'story',
    });
    expect(paths[1]).toMatchObject({
      path: '/root/tags',
      type: 'tags',
    });
  });
});
