import React, { FC } from 'react';

import { DocType, defDocType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface PageListProps {
  pageContext: {
    type: DocType;
    docId?: string;
    storyId?: string;
  };
}

const DocHomeTemplate: FC<PageListProps> = ({
  pageContext: { type = defDocType, docId, storyId },
}) => {
  return (
    <Layout docId={docId} storyId={storyId} type={type}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export default DocHomeTemplate;
