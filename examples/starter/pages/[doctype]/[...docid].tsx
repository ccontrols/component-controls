import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getDocPages } from '@component-controls/store';
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
  category,
}) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocPage type={type} category={category} />
    </Layout>
  );
};

export default DocPageTemplate;

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getDocPages(store);
  return { paths: pages.map(page => page.path), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype, docid } = params as { doctype: string; docid: string[] };
  const path = `/${doctype}/${docid.join('/')}`;
  const pages = getDocPages(store);
  const page = pages.find(page => page.path === path);
  const {
    type = null,
    docId = null,
    storyId = null,
    category = null,
    activeTab = null,
  } = page || {};
  return { props: { docId, type, storyId, category, activeTab } };
};
