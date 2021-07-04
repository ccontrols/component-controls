import React from 'react';
import { GetServerSideProps } from 'next';
import { NextLayout, getIndexPage } from '@component-controls/nextjs-plugin';

const HomePage: typeof NextLayout = props => <NextLayout {...props} />;

export const getServerSideProps: GetServerSideProps = async () => {
  const { getExamples } = require('../src/utils/examples');
  return {
    props: { ...getIndexPage(), userData: { examples: getExamples() } },
  };
};
export default HomePage;
