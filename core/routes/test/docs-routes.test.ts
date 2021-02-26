import {
  getDefaultStore,
  defaultBuildConfig,
  defaultRunConfig,
  deepMerge,
  Store,
} from '@component-controls/core';
import { getIndexPage, getHomePages, getDocPages } from '../src/routes';

describe('docs-routes', () => {
  const store: Store = {
    ...getDefaultStore(),
    ...{
      config: deepMerge(defaultBuildConfig, defaultRunConfig),
      docs: {
        'doc/doc-1': { title: 'doc/doc-1', stories: ['story-1', 'story-2'] },
        'doc/doc-2': {
          title: 'doc/doc-2',
          stories: ['story-3', 'story-4'],
        },
      },
      stories: {},
    },
  };
  const store1: Store = {
    ...store,
    docs: { ...store.docs, index: { title: 'index', route: 'docs/' } },
  };
  it('home page first page', () => {
    const index = getIndexPage(store);

    expect(index).toMatchObject({
      docId: 'doc/doc-1',
      path: '/',
      storyId: 'story-1',
    });
  });

  it('doc index page first page', () => {
    const pages = getHomePages(store);
    expect(pages[0]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs',
      storyId: 'story-1',
    });
  });
  it('doc story pages', () => {
    const pages = getDocPages(store);
    expect(pages[0]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs/story-1',
      storyId: 'story-1',
    });
    expect(pages[1]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs/story-2',
      storyId: 'story-2',
    });
    expect(pages[2]).toMatchObject({
      docId: 'doc/doc-2',
      path: '/docs/story-3',
      storyId: 'story-3',
    });
    expect(pages[3]).toMatchObject({
      docId: 'doc/doc-2',
      path: '/docs/story-4',
      storyId: 'story-4',
    });
  });
  it('doc index page custom route', () => {
    const pages = getHomePages(store1);
    expect(pages[0]).toMatchObject({
      docId: 'index',
      path: '/docs',
      storyId: undefined,
    });
  });
  it('doc story pages custom home route', () => {
    const pages = getDocPages(store1);
    expect(pages[0]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs/story-1',
      storyId: 'story-1',
    });
    expect(pages[1]).toMatchObject({
      docId: 'doc/doc-1',
      path: '/docs/story-2',
      storyId: 'story-2',
    });
    expect(pages[2]).toMatchObject({
      docId: 'doc/doc-2',
      path: '/docs/story-3',
      storyId: 'story-3',
    });
    expect(pages[3]).toMatchObject({
      docId: 'doc/doc-2',
      path: '/docs/story-4',
      storyId: 'story-4',
    });
  });
});
