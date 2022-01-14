import React, { FC, ReactElement, useMemo } from 'react';
import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Layout, LayoutProps } from '@component-controls/base-integration';
import { store } from '@component-controls/base-integration/store';

import { getRoutes } from '@component-controls/routes';
import { ReactRouterLink } from './components/ReactRouterLink';

export const ControlsPage = (
  props: Omit<LayoutProps, 'Helmet' | 'Link' | 'store'>,
): FC => {
  const loadedStore = useMemo(() => store(false), []);
  const DocHome: FC = () => (
    <Layout
      {...props}
      store={loadedStore}
      Helmet={Helmet as LayoutProps['Helmet']}
      Link={ReactRouterLink}
    />
  );
  return DocHome;
};

export const useRoutes = (): ReactElement[] => {
  const loadedStore = useMemo(() => store(false), []);
  const routes = useMemo(() => {
    const paths = getRoutes(loadedStore);
    const routes = paths.map(props => (
      <Route
        key={props.path}
        exact
        path={props.path}
        component={ControlsPage(props)}
      />
    ));
    return routes;
  }, [loadedStore]);
  return routes;
};
