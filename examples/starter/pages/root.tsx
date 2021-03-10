import React from 'react';
import { GetStaticProps } from 'next';
import { DocPageTemplate, store, getIndexPage } from '@component-controls/nextjs-plugin';

const HomePage: typeof DocPageTemplate  = props => <DocPageTemplate {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  const homePage = getIndexPage(store);
  const { docId = null, type = null, storyId = null } = homePage;
  return { props: { docId, type, storyId } };
};

export default HomePage;
