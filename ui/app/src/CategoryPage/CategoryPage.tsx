/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title, Link } from '@component-controls/components';
import { PageContainer, BlockContext } from '@component-controls/blocks';
import { DocumentsList } from '../DocumentsList';

export interface CategoryPageProps {
  type: PageType;
  category: any;
}
export const CategoryPage: FC<CategoryPageProps> = ({ type, category }) => {
  const { storeProvider } = useContext(BlockContext);
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  const pages = storeProvider.getPagesByCategory(type, category);
  const customPage = storeProvider.getStoryDoc(category);
  const Page =
    customPage && customPage.type === type ? customPage.MDXPage : undefined;
  return (
    <PageContainer variant="categorypage.pagecontainer" id="content">
      <Box variant="categorypage.titlecontainer">
        <Title>{category}</Title>
        <Link
          href={`/${pageConfig.basePath}`}
        >{`All ${pageConfig.label}`}</Link>
      </Box>
      {Page && (
        <Box variant="categorypage.mdxcontainer">
          <Page />
        </Box>
      )}
      <Box variant="categorypage.listcontainer">
        <DocumentsList pages={pages} />
      </Box>
    </PageContainer>
  );
};
