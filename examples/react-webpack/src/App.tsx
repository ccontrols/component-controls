import React, { FC, Fragment } from 'react';
import { store } from '@component-controls/store/controls-store';
import { useRoutes } from '@component-controls/react-router-integration';

const App: FC = () => {
  const routes = useRoutes(store);
  return <Fragment>{routes}</Fragment>;
};

export default App;
