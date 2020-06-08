import React, { FC } from 'react';
import { BlogPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface BlogPageProps {
  pathContext: {
    title: string;
    doc: string;
  };
}

const BlogPageTemplate: FC<BlogPageProps> = ({ pathContext: { doc } }) => {
  return (
    <Layout docId={doc}>
      <BlogPage />
    </Layout>
  );
};

export default BlogPageTemplate;
