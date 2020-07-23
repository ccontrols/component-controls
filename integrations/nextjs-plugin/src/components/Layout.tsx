/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { AppContext } from '@component-controls/app';
import { store } from '../store';

import { NextLink } from './NextLink';

interface LayoutProps {
  docId?: string;
  storyId?: string;
  type?: DocType;
  activeTab?: string;
}

export const Layout: FC<LayoutProps> = ({
  docId,
  storyId,
  type,
  children,
  activeTab,
}) => {
  return (
    <AppContext
      docId={docId}
      storyId={storyId}
      store={store}
      linkClass={NextLink}
      type={type}
      activeTab={activeTab}
    >
      {children}
    </AppContext>
  );
};
