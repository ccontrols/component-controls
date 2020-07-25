/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { AppContext } from '@component-controls/app';
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
