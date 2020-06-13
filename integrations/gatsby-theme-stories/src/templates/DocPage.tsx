import React, { FC } from 'react';
import { PageType } from '@component-controls/specification';
import { DocPage } from '@component-controls/app';
import { Layout } from '../components/Layout';
import { pages } from '../config/pages';

interface DocPageProps {
  pathContext: {
    doc: string;
    type: PageType;
  };
}

const DocPageTemplate: FC<DocPageProps> = ({ pathContext: { doc, type } }) => {
  return (
    <Layout docId={doc}>
      <DocPage pagesFn={pages} type={type} />
    </Layout>
  );
};

export default DocPageTemplate;
