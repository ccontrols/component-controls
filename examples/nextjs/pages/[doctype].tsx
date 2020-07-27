import React, { FC } from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { DocType, defDocType } from '@component-controls/core';
import { getHomePages } from '@component-controls/store';
import { DocumentHomePage } from '@component-controls/app';
import { Layout, store } from '@component-controls/nextjs-plugin';

interface PageListProps {
  type: DocType;
  docId?: string;
  storyId?: string;
}

const DocHomeTemplate: FC<PageListProps> = ({
  type = defDocType,
  docId,
  storyId,
}) => {
  return (
    <Layout docId={docId} storyId={storyId}>
      <DocumentHomePage type={type} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = getHomePages(store);
  return { paths: pages.map(page => page.path), fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { doctype: basepath } = params as { doctype: string };
  const pages = getHomePages(store);
  const page = pages.find(page => page.path === `/${basepath}`);
  const { type = null, docId = null, storyId = null } = page || {};
  return { props: { docId, storyId, type } };
};

export default DocHomeTemplate;
