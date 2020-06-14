/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title } from '@component-controls/components';
import { PageContainer, BlockContext } from '@component-controls/blocks';
import { CategoryListItem } from './CategoryListItem';

export interface CategoryListProps {
  /**
   * page type
   */
  type: PageType;
}

/**
 * displays page of categories
 */
export const CategoryList: FC<CategoryListProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const categories = storeProvider?.getUniquesByCategory(type) || [];
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  return (
    <PageContainer variant="categorylist.pagecontainer" id="content">
      <Title>{pageConfig.label}</Title>
      <Box variant="categorylist.list">
        <ul>
          {Object.keys(categories).map(key => (
            <CategoryListItem
              key={key}
              link={storeProvider.getPagePath(type, key)}
              name={key}
              count={categories[key]}
            />
          ))}
        </ul>
      </Box>
    </PageContainer>
  );
};
