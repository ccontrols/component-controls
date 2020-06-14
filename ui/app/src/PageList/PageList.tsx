/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title } from '@component-controls/components';
import { PageContainer, BlockContext } from '@component-controls/blocks';
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
    <PageContainer sx={{ maxWidth: '1000px' }} id="content">
      <Title>{pageConfig.label}</Title>
      <DocumentsList pages={pages} />
    </PageContainer>
  );
};
