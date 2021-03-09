import React, { FC } from 'react';
import { DocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocPageTemplateProps {
  docId?: string;
  storyId?: string;
  type: DocType;
  activeTab?: string;
  category?: string;
}

export const DocPageTemplate: FC<DocPageTemplateProps> = ({
  docId,
  storyId,
  type,
  activeTab,
  category,
}) => (
  <Layout docId={docId} storyId={storyId} activeTab={activeTab} type={category}>
    <DocPage type={type} category={category} />
  </Layout>
);
