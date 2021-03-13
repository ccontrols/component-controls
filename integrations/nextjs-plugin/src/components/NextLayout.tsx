import React, { FC } from 'react';
import Helmet from 'next/head';
import { Layout, LayoutProps } from '@component-controls/base-integration';
import { NextLink } from './NextLink';

export const NextLayout: FC<Omit<LayoutProps, 'Helmet' | 'Link'>> = props => {
  return (
    <Layout
      {...props}
      Helmet={Helmet as LayoutProps['Helmet']}
      Link={NextLink}
    />
  );
};
