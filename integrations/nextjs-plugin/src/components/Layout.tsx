/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { AppContext } from '@component-controls/app';
const { store } = require('./store');

import { NextLink } from './NextLink';

interface LayoutProps {
  docId?: string;
  storyId?: string;
  type?: DocType;
}

export const Layout: FC<LayoutProps> = ({ docId, storyId, type, children }) => {
  return (
    <AppContext
      docId={docId}
      storyId={storyId}
      store={store}
      linkClass={NextLink}
      type={type}
    >
      {children}
    </AppContext>
  );
};
