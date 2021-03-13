import React, { FC } from 'react';
import Helmet from 'next/head';
import { Layout, LayoutProps } from '@component-controls/base-integration';
import { NextLink } from './NextLink';

export const NextLayout: FC<Omit<LayoutProps, 'Helmet' | 'Link'>> = props => {
  let head;
  if (typeof process.env.NEXT_PUBLIC_CC_CSS === 'string') {
    head = (
      <Helmet>
        <style key="controls-styles">
          {JSON.parse(process.env.NEXT_PUBLIC_CC_CSS)}
        </style>
      </Helmet>
    );
  }

  return (
    <>
      {head}
      <Layout
        {...props}
        Helmet={Helmet as LayoutProps['Helmet']}
        Link={NextLink}
      />
    </>
  );
};
