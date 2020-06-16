/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/core';
import { Title } from '@component-controls/components';
import { BlockContext } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { DocumentsList } from '../DocumentsList';

export interface PageListProps {
  type: PageType;
}

/**
 * list of documents for a specific page type
 */
export const PageList: FC<PageListProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const pages = storeProvider?.getPageList(type) || [];
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  return (
    <PageContainer variant="pagelist.container" type={type} id="content">
      <Title>{pageConfig.label}</Title>
      <DocumentsList pages={pages} />
    </PageContainer>
  );
};
