import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  DocHomeTemplate,
  store,
  getHomePagesPaths,
  getDocHomePage,
} from '@component-controls/nextjs-plugin';

const DocHome: typeof DocHomeTemplate = props => <DocHomeTemplate {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getHomePagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  const page = getDocHomePage(store, basepath);
  const { type = null, docId = null, storyId = null } = page || {};
  return { props: { docId, storyId, type } };
};

export default DocHome;
