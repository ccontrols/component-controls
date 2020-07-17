import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocPage } from '@component-controls/app';
import { DocType } from '@component-controls/core';
import { Layout, store } from '@component-controls/nextjs-plugin';

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
  activeTab,
  category,
}) => {
  return (
    <Layout docId={docId} storyId={storyId} type={type}>
      <DocPage activeTab={activeTab} type={type} category={category} />
    </Layout>
  );
};

export default DocPageTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: string[] = store.getDocPaths();
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  const {
    type = null,
    docId = null,
    storyId = null,
    category = null,
    activeTab = null,
  } = store.getDocPage(`/${doctype}/${docid.join('/')}`) || {};
  return { props: { docId, type, storyId, category, activeTab } };
};
