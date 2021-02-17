/** @jsx jsx */
import { FC } from 'react';
import { jsx, Themed } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { useConfig, useSortedDocByType } from '@component-controls/store';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';
import { DocPage } from '../DocPage';
import { CategoryList } from '../CategoryList';

export interface DocumentHomePageProps {
  type: DocType;
}

/**
 * list of documents for a specific document type
 */
export const DocumentHomePage: FC<DocumentHomePageProps> = ({ type }) => {
  const config = useConfig();
  const { categories } = config || {};
  const isCategory = categories?.includes(type);
  const pages = useSortedDocByType(type);
  if (isCategory) {
    return <CategoryList type={type} />;
  }
  const page = config.pages?.[type] || {};
  if (page.indexHome) {
    return (
      <PageContainer variant="pagelist.container" type={type} id="content">
        <Themed.h1>{page.label}</Themed.h1>
        <DocumentsList pages={pages} type={type} />
      </PageContainer>
    );
  }
  return <DocPage type={type} />;
};
