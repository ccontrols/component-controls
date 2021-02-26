import React, { FC } from 'react';
import { DocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocPageProps {
  docId?: string;
  storyId?: string;
  type: DocType;
  activeTab?: string;
  category?: string;
}

export const DocPageTemplate = ({
  docId,
  storyId,
  type,
  activeTab,
  category,
}: DocPageProps): FC => {
  const DocHome: FC = () => (
    <Layout docId={docId} storyId={storyId} activeTab={activeTab}>
      <DocPage type={type} category={category} />
    </Layout>
  );
  return DocHome;
};
