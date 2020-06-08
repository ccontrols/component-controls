import React, { FC } from 'react';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';
import { pages } from '../config/pages';

interface DocPageProps {
  pathContext: {
    title: string;
    doc: string;
  };
}

const DocPageTemplate: FC<DocPageProps> = ({ pathContext: { doc } }) => {
  return (
    <Layout docId={doc}>
      <DocPage pagesFn={pages} />
    </Layout>
  );
};

export default DocPageTemplate;
