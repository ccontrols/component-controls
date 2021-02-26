import React, { ReactElement, useMemo } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Store } from '@component-controls/core';
import {
  DocHomePagesPath,
  DocPagesPath,
  getDocPages,
  getHomePages,
  getIndexPage,
} from '@component-controls/routes';
import { DocPageTemplate } from './templates/DocPage';
import { DocHomeTemplate } from './templates/DocHome';

export const useRoutes = (store: Store): ReactElement => {
  const routes = useMemo(() => {
    const routes = [];
    //home page
    const { path, docId, type, storyId } = getIndexPage(store) || {};
    routes.push(
      <Route
        key={path}
        exact
        path={path}
        component={DocPageTemplate({ docId, type, storyId })}
      />,
    );

    const homePages = getHomePages(store);
    homePages.forEach(({ path, docId, storyId, type }: DocHomePagesPath) => {
      routes.push(
        <Route
          key={path}
          exact
          path={path}
          component={DocHomeTemplate({
            type,
            docId,
            storyId,
          })}
        />,
      );
    });

    const docPages = getDocPages(store);
    docPages.forEach(
      ({ path, type, docId, storyId, category, activeTab }: DocPagesPath) => {
        routes.push(
          <Route
            key={path}
            exact
            path={path}
            component={DocPageTemplate({
              type,
              docId,
              storyId,
              category,
              activeTab,
            })}
          />,
        );
      },
    );
    return routes;
  }, [store]);
  return <Router>{routes}</Router>;
};
