import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout, store, getIndexPage } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const HomePage: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId}>
      <DocPage type={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { docId = null, type = null } = getIndexPage(store);
  return { props: { docId, type } };
};

export default HomePage;
