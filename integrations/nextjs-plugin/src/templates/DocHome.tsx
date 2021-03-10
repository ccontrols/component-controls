import React, { FC } from 'react';

import { DocType, defDocType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

export interface DocHomeTemplateProps {
  type: DocType;
  docId?: string;
  storyId?: string;
}

export const DocHomeTemplate: FC<DocHomeTemplateProps> = ({
  type = defDocType,
  docId,
  storyId,
}) => (
  <Layout docId={docId} storyId={storyId} type={type}>
    <DocumentHomePage type={type} />
  </Layout>
);
