import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '@component-controls/store/controls-store';
import { useRoutes } from '@component-controls/react-router-integration';

const App: FC = () => {
  const routes = useRoutes(store);
  return <Router>{routes}</Router>;
};

export default App;
