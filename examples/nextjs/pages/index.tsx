import React, { FC } from 'react';
import { GetStaticProps } from 'next';

import { DocType, defDocType } from '@component-controls/core';
import { DocPage } from '@component-controls/app';
import { Layout } from '@component-controls/nextjs-plugin';
import { LoadingDocStore } from '@component-controls/instrument';

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
  const store = require('@component-controls/webpack-compile/bundle');
  const homePage = store.stores.find(
    (s: LoadingDocStore) => s.doc?.route === '/',
  );
  return { props: { docId: homePage?.doc?.title, type: homePage?.doc?.type } };
};

export default HomePage;
