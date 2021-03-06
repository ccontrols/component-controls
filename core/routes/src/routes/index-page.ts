import {
  Store,
  defDocType,
  getHomePath,
  getRoutePath,
} from '@component-controls/core';

export interface HomePageInfo {
  type: string;
  docId?: string;
  storyId?: string;
  path: string;
  lastModified?: string;
}

export const getIndexPage = (store?: Store): HomePageInfo => {
  if (store) {
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
      lastModified: homePage?.dateModified
        ? new Date(homePage?.dateModified).toISOString()
        : undefined,
      path: homePath,
      storyId,
      docId,
      type: homePage?.type || defDocType,
    };
  }
  return {
    type: defDocType,
    path: '/',
  };
};
