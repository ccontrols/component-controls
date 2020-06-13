/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title, Subtitle } from '@component-controls/components';
import { Link } from '@component-controls/app-components';
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
  return (
    <PageContainer variant="categoryage.pagecontainer" id="content">
      <Box variant="categoryage.titlecontainer">
        <Title>{pageConfig.label}</Title>
        <Link
          href={`/${pageConfig.basePath}`}
        >{`All ${pageConfig.label}`}</Link>
      </Box>
      <Subtitle>{`filtered by "${category}"`}</Subtitle>
      <Box variant="categoryage.listcontainer">
        <DocumentsList pages={pages} />
      </Box>
    </PageContainer>
  );
};
