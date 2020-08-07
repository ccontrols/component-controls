import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout, store, getIndexPage } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
  storyId?: string;
}

const HomePage: FC<PageListProps> = ({ type = defDocType, docId, storyId }) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocPage type={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const homePage = getIndexPage(store);
  const { docId = null, type = null, storyId = null } = homePage;
  return { props: { docId, type, storyId } };
};

export default HomePage;
