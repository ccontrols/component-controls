import React, { FC } from 'react';
import { AppContext, AppContextProps } from '@component-controls/app';
import { Helmet } from 'react-helmet';
import { store } from '@component-controls/store/controls-store';
import { ReactRouterLink } from './ReactRouterLink';

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
      linkClass={ReactRouterLink}
      activeTab={activeTab}
    >
      {children}
    </AppContext>
  );
};
