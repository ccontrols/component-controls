import { Store } from '@component-controls/core';
import { getHomePages, DocHomePagesPath } from './docs-index-pages';
import { getDocPages, DocPagesPath } from './docs-pages';
import { getIndexPage, HomePageInfo } from './index-page';

export * from './docs-index-pages';
export * from './docs-pages';
export * from './index-page';

export type RoutePath = DocHomePagesPath & DocPagesPath & HomePageInfo;

export const getRoutes = (store: Store): RoutePath[] => {
  const routes = [];
  //home page
  const index = getIndexPage(store) || {};
  routes.push(index);
  //docs index pages
  const homePages = getHomePages(store);
  homePages.forEach(page => {
    routes.push(page);
  });

  //document pages
  const docPages = getDocPages(store);
  docPages.forEach(page => {
    routes.push(page);
  });
  return routes;
};
