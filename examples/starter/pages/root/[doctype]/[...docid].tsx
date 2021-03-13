import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  NextLayout,
  store,
  getDocPagesPaths,
  getDocPage,
} from '@component-controls/nextjs-plugin';

const DocPage: typeof NextLayout = props => <NextLayout {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getDocPagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  return { props: getDocPage(store, doctype, docid) };
};

export default DocPage;
