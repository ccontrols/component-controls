import React, { FC, ReactElement, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Store } from '@component-controls/core';
import { Layout, LayoutProps } from '@component-controls/base-integration';
import { loadStore } from '@component-controls/store';
import { getRoutes } from '@component-controls/routes';
import { ReactRouterLink } from './components/ReactRouterLink';
const bundle = require('component-controls-bundle');

export const store: Store = loadStore(bundle, true);

export const ControlsPage = (
  props: Omit<LayoutProps, 'Helmet' | 'Link' | 'store'>,
): FC => {
  const DocHome: FC = () => (
    <Layout
      {...props}
      store={store}
      Helmet={Helmet as LayoutProps['Helmet']}
      Link={ReactRouterLink}
    />
  );
  return DocHome;
};

export const useRoutes = (): ReactElement[] => {
  const routes = useMemo(() => {
    const paths = getRoutes(store);
    const routes = paths.map(props => (
      <Route
        key={props.path}
        exact
        path={props.path}
        component={ControlsPage(props)}
      />
    ));
    return routes;
  }, []);
  return routes;
};
