import React, { FC } from 'react';
import { AppContext, AppContextProps } from '@component-controls/app';
import Helmet from 'next/head';
import { store } from '../store';
import { NextLink } from './NextLink';

interface LayoutProps {
  docId?: string;
  storyId?: string;
  activeTab?: string;
}

export const Layout: FC<LayoutProps> = ({
  docId,
  storyId,
  children,
  activeTab,
}) => {
  return (
    <AppContext
      Helmet={Helmet as AppContextProps['Helmet']}
      docId={docId}
      storyId={storyId}
      store={store}
      linkClass={NextLink}
      activeTab={activeTab}
    >
      {children}
    </AppContext>
  );
};
