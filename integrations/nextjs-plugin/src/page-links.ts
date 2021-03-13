import {
  getHomePages as getHomePagesStore,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
} from '@component-controls/routes';
import {
  Store,
  DocType,
  getHomePath,
  getRoutePath,
  ensureTrailingSlash,
} from '@component-controls/core';
export { getIndexPage } from '@component-controls/routes';

export const getHomePagesPaths = (store: Store): string[] => {
  const pages = getHomePagesStore(store);
  return pages.map(page => page.path);
};

export const getDocHomePage = (
  store: Store,
  path: string,
): DocHomePagesPath => {
  const pages = getHomePages(store);
  const resolvedPath = getRoutePath(store, path);
  const page = pages.find(page => page.path === resolvedPath);
  return page || { path };
};

export const getDocPagesPaths = (store: Store): string[] => {
  const pages = getDocPages(store);
  return pages.map(page => page.path);
};

export const getDocPage = (
  store: Store,
  docType: DocType,
  docId: string[],
): DocPagesPath => {
  const homePath = getHomePath(store);
  const path = `${ensureTrailingSlash(homePath)}${docType}/${docId.join('/')}`;
  const pages = getDocPages(store);
  const page = pages.find(page => page.path === path);
  return page || { path };
};
