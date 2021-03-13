import React, { FC } from 'react';
import { GatsbyLayout, GatsbyLayoutProps } from '../components/GatsbyLayout';

interface DocPageProps {
  pageContext: GatsbyLayoutProps;
}

const DocPage: FC<DocPageProps> = ({ pageContext }) => (
  <GatsbyLayout {...pageContext} />
);
export default DocPage;
