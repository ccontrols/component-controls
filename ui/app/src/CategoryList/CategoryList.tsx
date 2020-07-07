/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocumentType } from '@component-controls/core';
import { Title } from '@component-controls/components';
import { BlockContext } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { CategoryListItem } from './CategoryListItem';

export interface CategoryListProps {
  /**
   * document type
   */
  type: DocumentType;
}

/**
 * displays page of categories
 */
export const CategoryList: FC<CategoryListProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const categories = storeProvider?.getUniquesByCategory(type) || [];
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  return (
    <PageContainer
      type={type}
      variant="categorylist.pagecontainer"
      id="content"
    >
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
