/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title } from '@component-controls/components';
import { PageContainer, BlockContext } from '@component-controls/blocks';
import { PageListItem } from './PageListItem';

export interface PageListProps {
  type: PageType;
}
export const PageList: FC<PageListProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const pages = storeProvider?.getPageList(type) || [];
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  return (
    <PageContainer sx={{ flex: '1 0 auto' }} maxWidth="1000px" id="content">
      <Title>{pageConfig.label}</Title>
      <section>
        {pages.map(page => (
          <PageListItem
            key={page?.title}
            link={storeProvider.getPagePath(type, page.title)}
            page={page}
          />
        ))}
      </section>
    </PageContainer>
  );
};
