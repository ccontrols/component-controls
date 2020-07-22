/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { Title } from '@component-controls/components';
import { BlockContext, useDocByType } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';
import { DocPage } from '../DocPage';
import { CategoryList } from '../CategoryList';

export interface DocumentHomePageProps {
  type: DocType;
  docId?: string;
}

/**
 * list of documents for a specific document type
 */
export const DocumentHomePage: FC<DocumentHomePageProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const { categories } = storeProvider.config || {};
  const isCategory = categories?.includes(type);
  if (isCategory) {
    return <CategoryList type={type} />;
  }
  const pages = useDocByType(type);
  const page = storeProvider?.config?.pages?.[type] || {};
  return page.indexHome ? (
    <PageContainer variant="pagelist.container" type={type} id="content">
      <Title>{page.label}</Title>
      <DocumentsList pages={pages} />
    </PageContainer>
  ) : (
    <DocPage type={type} />
  );
};
