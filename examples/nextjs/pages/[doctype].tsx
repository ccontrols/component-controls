import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocType, defDocType, Pages } from '@component-controls/core';
import { DocumentHomePage } from '@component-controls/app';
import { getDocs } from '@component-controls/loader';
import { Layout } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
}

const DocHomeTemplate: FC<PageListProps> = ({ type = defDocType, docId }) => {
  return (
    <Layout docId={docId} type={type}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = [];
  const store = require('@component-controls/webpack-compile/bundle');
  const { pages } = store.buildConfig || {};
  if (pages) {
    Object.keys(pages).forEach(type => {
      const page = pages[type as DocType];
      //const docType = type as DocType;
      // const docs = getDocs(store.stores, docType);
      paths.push(`/${page.basePath}`);
    });
  }
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const store = require('@component-controls/webpack-compile/bundle');
  const { doctype: basepath } = params as { doctype: string };

  const { pages } = store.buildConfig || {};
  const doctype = Object.keys(pages).find(key => {
    return pages[key].basePath.replace(/\//g, '') === basepath;
  }) as DocType;
  const docs: Pages = getDocs(store.stores, doctype);
  const page = pages[doctype];
  const docsPage = docs.find(doc => doc?.route === `/${page.basePath}`);
  return { props: { docId: docsPage?.title || null, type: doctype } };
};

export default DocHomeTemplate;
