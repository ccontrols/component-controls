import React, { FC } from 'react';
import { AppContext, AppContextProps } from '@component-controls/app';
import Helmet from 'next/head';
import { store } from '../store';
import { NextLink } from './NextLink';

interface LayoutProps {
  docId?: string;
  storyId?: string;
  activeTab?: string;
  type?: string;
}

export const Layout: FC<LayoutProps> = ({
  docId,
  storyId,
  children,
  activeTab,
  type,
}) => {
  return (
    <AppContext
      Helmet={Helmet as AppContextProps['Helmet']}
      docId={docId}
      storyId={storyId}
      type={type}
      store={store}
      linkClass={NextLink}
      activeTab={activeTab}
    >
      {children}
    </AppContext>
  );
};
