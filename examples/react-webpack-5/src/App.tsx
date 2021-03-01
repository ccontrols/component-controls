import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from '@component-controls/react-router-integration';

export const App: FC = () => {
  const routes = useRoutes();
  return <Router>{routes}</Router>;
};
