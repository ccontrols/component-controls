import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { AppContext } from '@component-controls/app';
import { store } from '@component-controls/store/controls-store';

import { GatsbyLink } from './GatsbyLink';

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
      docId={docId}
      storyId={storyId}
      store={store}
      type={type}
      linkClass={GatsbyLink}
      Helmet={Helmet as any}
      activeTab={activeTab}
    >
      {children}
    </AppContext>
  );
};
