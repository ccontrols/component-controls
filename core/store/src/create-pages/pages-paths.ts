import {
  StoriesStore,
  defDocType,
  DocType,
  getDocTypePath,
  removeTrailingSlash,
  ensureStartingSlash,
  Pages,
  TabConfiguration,
  getDocPath,
  getStoryPath,
} from '@component-controls/core';

import { HomePageInfo } from '../types';

export const getIndexPage = (store: StoriesStore): HomePageInfo => {
  const docs = Object.keys(store.docs);
  const homePageId = docs.find(key => {
    const doc = store.docs[key];
    return doc.route === '/';
  });
  const homePage = homePageId
    ? store.docs[homePageId]
    : docs.length > 0
    ? store.docs[docs[0]]
    : undefined;
  return {
    docId: homePage?.title,
    type: homePage?.type || defDocType,
  };
};

export interface DocHomePagesPath {
  type: DocType;
  path: string;
  docId?: string;
}
export const getHomePages = (store: StoriesStore): DocHomePagesPath[] => {
  const { pages = {} } = store?.config || {};
  if (pages) {
    const docs = Object.keys(store.docs);
    const paths: DocHomePagesPath[] = Object.keys(pages).map(
      (type: DocType) => {
        const page = pages[type];
        const path = getDocTypePath(page) as string;

        const docId =
          docs.find(key => {
            const doc = store.docs[key];
            return (
              removeTrailingSlash(ensureStartingSlash(doc?.route || '')) ===
              path
            );
          }) || docs.find(key => (store.docs[key].type || defDocType) === type);
        return {
          type,
          path,
          docId,
        };
      },
    );
    return paths;
  }
  return [];
};

export const getPageList = (
  store: StoriesStore,
  type: DocType = defDocType,
): Pages => {
  if (store) {
    return Object.keys(store.docs).reduce((acc: Pages, key: string) => {
      const doc = store.docs[key];
      if (doc) {
        const { type: docType = defDocType } = doc;
        if (docType === type) {
          return [...acc, doc];
        }
      }
      return acc;
    }, []);
  }
  return [];
};

export const getUniquesByField = (
  store: StoriesStore,
  field: string,
): { [key: string]: number } => {
  return Object.keys(store.docs).reduce(
    (acc: { [key: string]: number }, key) => {
      const doc = store.docs[key];
      const value = (doc as any)[field];
      const values = Array.isArray(value) ? value : [value];
      values.forEach(v => {
        if (v !== undefined) {
          if (typeof acc[v] === 'undefined') {
            acc[v] = 0;
          }
          acc[v] = acc[v] = 1;
        }
      });
      return acc;
    },
    {},
  );
};

export interface DocPagesPath {
  type: DocType;
  path: string;
  docId?: string | null;
  storyId?: string | null;
  category?: string | null;
  activeTab?: string | null;
}
export const getDocPages = (store: StoriesStore): DocPagesPath[] => {
  const { pages = {}, categories = [] } = store?.config || {};
  const docPaths: DocPagesPath[] = [];
  Object.keys(pages).forEach(type => {
    if (!categories.includes(type as DocType)) {
      const page = pages[type as DocType];
      const docType = type as DocType;
      const docs: Pages = getPageList(store, docType);
      const tabs: Pick<TabConfiguration, 'route'>[] = page.tabs || [
        { route: undefined },
      ];
      tabs.forEach((tab, tabIndex) => {
        const route = tabIndex > 0 ? tab.route : undefined;
        docs.forEach(doc => {
          if (doc.route !== '/') {
            const stories =
              page.storyPaths && doc.stories?.length
                ? doc.stories
                : [undefined];
            stories.forEach((storyId?: string) => {
              const path = getStoryPath(storyId, doc, pages, route);
              docPaths.push({
                path,
                type: docType,
                activeTab: route,
                docId: doc.title,
                storyId,
              });
            });
          }
        });
      });
    } else {
      const cats = getUniquesByField(store, type);
      const catKeys = Object.keys(cats);
      catKeys.forEach(tag => {
        const path = getDocPath(
          type as DocType,
          { title: tag, componentsLookup: {} },
          pages,
        );
        docPaths.push({
          path,
          type,
          category: tag,
        });
      });
    }
  });
  return docPaths;
};
