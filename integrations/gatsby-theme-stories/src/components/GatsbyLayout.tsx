import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Layout, LayoutProps } from '@component-controls/base-integration';
import { store } from '@component-controls/base-integration/store';
import { GatsbyLink } from '../components/GatsbyLink';

export type GatsbyLayoutProps = Omit<LayoutProps, 'Link' | 'Helmet'>;

export const GatsbyLayout: FC<GatsbyLayoutProps> = props => {
  return (
    <Layout Link={GatsbyLink} Helmet={Helmet as any} store={store} {...props} />
  );
};
