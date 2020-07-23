import React, { FC } from 'react';
import { DocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocPageProps {
  pathContext: {
    docId?: string;
    storyId?: string;
    type: DocType;
    activeTab?: string;
    category?: string;
  };
}

const DocPageTemplate: FC<DocPageProps> = ({
  pathContext: { docId, storyId, type, activeTab, category },
}) => {
  return (
    <Layout docId={docId} storyId={storyId} type={type} activeTab={activeTab}>
      <DocPage type={type} category={category} />
    </Layout>
  );
};

export default DocPageTemplate;
