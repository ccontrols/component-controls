import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  NextLayout,
  store,
  getHomePagesPaths,
  getDocHomePage,
} from '@component-controls/nextjs-plugin';

const DocHome: typeof NextLayout = props => <NextLayout {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getHomePagesPaths(store), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  return { props: getDocHomePage(store, basepath)};
};

export default DocHome;
