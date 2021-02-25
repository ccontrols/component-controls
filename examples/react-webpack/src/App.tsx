import React, { FC } from 'react';
import { store } from '@component-controls/store/controls-store';
import { Layout } from '@component-controls/nextjs-plugin';

const App: FC = () => {
  console.log(store);
  return <Layout />;
};

export default App;
