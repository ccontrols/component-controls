import React, { FC } from 'react';

import { DocType, defDocType } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface DocHomeProps {
  type: DocType;
  docId?: string;
  storyId?: string;
}

export const DocHomeTemplate = ({
  type = defDocType,
  docId,
  storyId,
}: DocHomeProps): FC => {
  const DocHome: FC = () => (
    <Layout docId={docId} storyId={storyId}>
      <DocumentHomePage type={type} />
    </Layout>
  );
  return DocHome;
};
