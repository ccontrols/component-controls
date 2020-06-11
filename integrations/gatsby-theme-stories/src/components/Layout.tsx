/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { AppContext } from '@component-controls/app';
const bundle = require('@component-controls/webpack-compile/bundle');

import { GatsbyLink } from './GatsbyLink';

interface LayoutProps {
  docId?: string;
}

export const Layout: FC<LayoutProps> = ({ docId, children }) => {
  return (
    <AppContext docId={docId} store={bundle} linkClass={GatsbyLink}>
      {children}
    </AppContext>
  );
};
