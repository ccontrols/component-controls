import React, { FC } from 'react';
import { PagePage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface BlogPageProps {
  pathContext: {
    title: string;
    doc: string;
  };
}

const PagePageTemplate: FC<BlogPageProps> = ({ pathContext: { doc } }) => {
  return (
    <Layout docId={doc}>
      <PagePage />
    </Layout>
  );
};

export default PagePageTemplate;
