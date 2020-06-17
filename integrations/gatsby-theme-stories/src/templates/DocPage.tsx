import React, { FC } from 'react';
import { PageType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocPageProps {
  pathContext: {
    doc: string;
    type: PageType;
    activeTab?: string;
  };
}

const DocPageTemplate: FC<DocPageProps> = ({
  pathContext: { doc, type, activeTab },
}) => {
  return (
    <Layout docId={doc} type={type}>
      <DocPage activeTab={activeTab} type={type} />
    </Layout>
  );
};

export default DocPageTemplate;
