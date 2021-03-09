import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  DocPageTemplate,
  store,
  getDocPagesPaths,
  getDocPage,
} from '@component-controls/nextjs-plugin';

const DocPage: typeof DocPageTemplate = props => <DocPageTemplate {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getDocPagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  const page = getDocPage(store, doctype, docid);
  const {
    type = null,
    docId = null,
    storyId = null,
    category = null,
    activeTab = null,
  } = page || {};
  return { props: { docId, type, storyId, category, activeTab } };
};

export default DocPage;
