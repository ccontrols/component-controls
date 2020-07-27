import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocPage } from '@component-controls/app';
import { DocType } from '@component-controls/core';
import {
  Layout,
  store,
  getDocPagesPaths,
  getDocPage,
} from '@component-controls/nextjs-plugin';

interface DocPageProps {
  docId?: string;
  storyId?: string;
  type: DocType;
  activeTab?: string;
  category?: string;
}

const DocPageTemplate: FC<DocPageProps> = ({
  docId,
  storyId,
  type,
  category,
}) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocPage type={type} category={category} />
    </Layout>
  );
};

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

export default DocPageTemplate;
