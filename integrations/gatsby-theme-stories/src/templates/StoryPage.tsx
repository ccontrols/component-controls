import React, { FC } from 'react';
import { ClassicPage } from '@component-controls/pages';
import { Layout } from '../components/layout';

interface SitePageProps {
  pathContext: {
    title: string;
  };
}

const SitePage: FC<SitePageProps> = ({ pathContext: { title } }) => {
  return (
    <Layout title={title}>
      <ClassicPage />
    </Layout>
  );
};

export default SitePage;
