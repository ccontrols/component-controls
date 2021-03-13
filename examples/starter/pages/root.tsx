import React from 'react';
import { GetStaticProps } from 'next';
import { NextLayout, store, getIndexPage } from '@component-controls/nextjs-plugin';

const HomePage: typeof NextLayout  = props => <NextLayout {...props} />;

export const getStaticProps: GetStaticProps = async () => {
  return { props: getIndexPage(store) };
};

export default HomePage;
