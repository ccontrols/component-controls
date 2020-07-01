/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/core';
import { Title } from '@component-controls/components';
import { BlockContext } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';
import { DocPage } from '../DocPage';

export interface DocumentHomePageProps {
  type: PageType;
  docId?: string;
}

/**
 * list of documents for a specific page type
 */
export const DocumentHomePage: FC<DocumentHomePageProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const pages = storeProvider?.getPageList(type) || [];
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
