import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  NextLayout,
  getHomePagesPaths,
  getDocHomePage,
} from '@component-controls/nextjs-plugin';

const DocHome: typeof NextLayout = props => <NextLayout {...props} />;

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getHomePagesPaths(), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  return { props: getDocHomePage(basepath) };
};

export default DocHome;
