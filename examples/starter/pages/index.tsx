import React, { FC } from 'react';
import { GetStaticProps } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const HomePage: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId} type={type}>
      <DocPage type={type} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { store } = require('@component-controls/nextjs-plugin/store');
  const { docId = null, type = null } = store.getIndexPage() || {};
  return { props: { docId, type } };
};

export default HomePage;
