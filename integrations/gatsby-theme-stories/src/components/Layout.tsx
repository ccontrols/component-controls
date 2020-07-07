/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { DocumentType } from '@component-controls/core';
import { AppContext } from '@component-controls/app';
const bundle = require('@component-controls/webpack-compile/bundle');

import { GatsbyLink } from './GatsbyLink';

interface LayoutProps {
  docId?: string;
  storyId?: string;
  type?: DocumentType;
}

export const Layout: FC<LayoutProps> = ({ docId, storyId, type, children }) => {
  return (
    <AppContext
      docId={docId}
      storyId={storyId}
      store={bundle}
      linkClass={GatsbyLink}
      type={type}
    >
      {children}
    </AppContext>
  );
};
