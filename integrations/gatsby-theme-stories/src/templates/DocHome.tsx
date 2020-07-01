import React, { FC } from 'react';

import { PageType, defPageType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface PageListProps {
  pathContext: {
    type: PageType;
    docId?: string;
  };
}

const DocHomeTemplate: FC<PageListProps> = ({
  pathContext: { type = defPageType, docId },
}) => {
  return (
    <Layout docId={docId} type={type}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export default DocHomeTemplate;
