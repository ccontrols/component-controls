import React, { FC } from 'react';

import { DocumentType, defDocType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface PageListProps {
  pathContext: {
    type: DocumentType;
    docId?: string;
  };
}

const DocHomeTemplate: FC<PageListProps> = ({
  pathContext: { type = defDocType, docId },
}) => {
  return (
    <Layout docId={docId} type={type}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export default DocHomeTemplate;
