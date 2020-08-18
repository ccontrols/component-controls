import {
  getHomePages as getHomePagesStore,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
} from '@component-controls/store';
import { Store, DocType } from '@component-controls/core';
export { getIndexPage } from '@component-controls/store';

export const getHomePagesPaths = (store: Store): string[] => {
  const pages = getHomePagesStore(store);
  return pages.map(page => page.path);
};

export const getDocHomePage = (
  store: Store,
  path: string,
): DocHomePagesPath | undefined => {
  const pages = getHomePages(store);
  return pages.find(page => page.path === `/${path}`);
};

export const getDocPagesPaths = (store: Store): string[] => {
  const pages = getDocPages(store);
  return pages.map(page => page.path);
};

export const getDocPage = (
  store: Store,
  docTyoe: DocType,
  docId: string[],
): DocPagesPath | undefined => {
  const path = `/${docTyoe}/${docId.join('/')}`;
  const pages = getDocPages(store);
  return pages.find(page => page.path === path);
};
