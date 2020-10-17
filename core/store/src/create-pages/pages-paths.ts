import {
  Store,
  defDocType,
  DocType,
  getDocTypePath,
  getHomePath,
  getRoutePath,
  removeTrailingSlash,
  ensureStartingSlash,
  Pages,
  TabConfiguration,
  getDocPath,
  getStoryPath,
  dateToLocalString,
} from '@component-controls/core';

import { HomePageInfo } from '../types';

export const getIndexPage = (store: Store): HomePageInfo => {
  const docs = Object.keys(store.docs);
  const homePath = getHomePath(store);
  const homePageId = docs.find(key => {
    const doc = store.docs[key];
    return getRoutePath(store, doc.route) === homePath;
  });
  const homePage = homePageId
    ? store.docs[homePageId]
    : docs.length > 0
    ? store.docs[docs[0]]
    : undefined;
  const docId = homePage?.title;
  const docStories: string[] =
    docId && store.docs[docId] ? store.docs[docId].stories || [] : [];
  const storyId: string | undefined = docStories.length
    ? docStories[0]
    : undefined;
  return {
    lastModified: dateToLocalString(homePage?.dateModified),
    path: homePath,
    storyId,
    docId,
    type: homePage?.type || defDocType,
  };
};

export interface DocHomePagesPath {
  type: DocType;
  path: string;
  docId?: string;
  storyId?: string;
  lastModified?: string;
}
export const getHomePages = (store: Store): DocHomePagesPath[] => {
  const { pages = {} } = store?.config || {};
  if (pages) {
    const docs = Object.keys(store.docs);
    const paths: DocHomePagesPath[] = Object.keys(pages)
      .map((type: DocType) => {
        const page = pages[type];
        const path = getDocTypePath(store, page) as string;

        const docId = page.indexHome
          ? undefined
          : docs.find(key => {
              const doc = store.docs[key];
              return (
                removeTrailingSlash(ensureStartingSlash(doc?.route || '')) ===
                path
              );
            }) ||
            docs.find(key => (store.docs[key].type || defDocType) === type);
        const doc = docId ? store.docs[docId] : undefined;
        const docStories: string[] = doc?.stories || [];
        const storyId: string | undefined = docStories.length
          ? docStories[0]
          : undefined;
        return {
          lastModified: dateToLocalString(doc?.dateModified),
          type,
          path,
          docId,
          storyId,
        };
      })
      .filter(({ path }) => path);
    return paths;
  }
  return [];
};

export const getPageList = (
  store: Store,
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
  store: Store,
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
  lastModified?: string;
  docId?: string | null;
  storyId?: string | null;
  category?: string | null;
  activeTab?: string | null;
}
export const getDocPages = (store: Store): DocPagesPath[] => {
  const { pages = {}, categories = [] } = store?.config || {};
  const docPaths: DocPagesPath[] = [];
  const homePath = getHomePath(store);
  Object.keys(pages).forEach(type => {
    if (!categories.includes(type as DocType)) {
      const page = pages[type as DocType];
      const docType = type as DocType;
      const docs: Pages = getPageList(store, docType);
      const tabs: Pick<TabConfiguration, 'route' | 'title'>[] = page.tabs || [
        { route: undefined, title: '' },
      ];
      tabs.forEach((tab, tabIndex) => {
        const route =
          tabIndex > 0
            ? tab.route || (tab.title ? tab.title.toLowerCase() : '')
            : undefined;
        docs.forEach(doc => {
          if (getRoutePath(store, doc.route) !== homePath) {
            const stories =
              page.sideNav?.storyPaths && doc.stories?.length
                ? doc.stories
                : [undefined];
            stories.forEach((storyId?: string) => {
              const path = getStoryPath(storyId, doc, store, route);
              docPaths.push({
                lastModified: dateToLocalString(doc.dateModified),
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
          store,
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
