/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/core';
import { AppContext } from '@component-controls/app';
const bundle = require('@component-controls/webpack-compile/bundle');

import { GatsbyLink } from './GatsbyLink';

interface LayoutProps {
  docId?: string;
  type?: PageType;
}

export const Layout: FC<LayoutProps> = ({ docId, type, children }) => {
  return (
    <AppContext docId={docId} store={bundle} linkClass={GatsbyLink} type={type}>
      {children}
    </AppContext>
  );
};
