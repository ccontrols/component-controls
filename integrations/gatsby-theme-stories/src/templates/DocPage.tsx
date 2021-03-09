import React, { FC } from 'react';
import { DocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocPageProps {
  pageContext: {
    docId?: string;
    storyId?: string;
    type: DocType;
    activeTab?: string;
    category?: string;
  };
}

const DocPageTemplate: FC<DocPageProps> = ({
  pageContext: { docId, storyId, type, activeTab, category },
}) => {
  return (
    <Layout
      docId={docId}
      storyId={storyId}
      activeTab={activeTab}
      type={category}
    >
      <DocPage type={type} category={category} />
    </Layout>
  );
};

export default DocPageTemplate;
