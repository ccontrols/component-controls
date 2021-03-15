import {
  getHomePages as getHomePagesStore,
  getHomePages,
  DocHomePagesPath,
  getDocPages,
  DocPagesPath,
  getIndexPage as routesGetIndexPage,
} from '@component-controls/routes';
import {
  DocType,
  getHomePath,
  getRoutePath,
  ensureTrailingSlash,
} from '@component-controls/core';
import { store } from './store';

export const getIndexPage = (): ReturnType<typeof routesGetIndexPage> =>
  routesGetIndexPage(store);
export const getHomePagesPaths = (): string[] => {
  const pages = getHomePagesStore(store);
  return pages.map(page => page.path);
};

export const getDocHomePage = (path: string): DocHomePagesPath => {
  const pages = getHomePages(store);
  const resolvedPath = getRoutePath(store, path);
  const page = pages.find(page => page.path === resolvedPath);
  return page || { path };
};

export const getDocPagesPaths = (): string[] => {
  const pages = getDocPages(store);
  return pages.map(page => page.path);
};

export const getDocPage = (docType: DocType, docId: string[]): DocPagesPath => {
  const homePath = getHomePath(store);
  const path = `${ensureTrailingSlash(homePath)}${docType}/${docId.join('/')}`;
  const pages = getDocPages(store);
  const page = pages.find(page => page.path === path);
  return page || { path };
};
