/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { Title } from '@component-controls/components';
import { useDocPropCount, useStore } from '@component-controls/blocks';
import { PageContainer } from '../PageContainer';
import { CategoryListItem } from './CategoryListItem';

export interface CategoryListProps {
  /**
   * document type
   */
  type: DocType;
}

/**
 * displays page of categories
 */
export const CategoryList: FC<CategoryListProps> = ({ type }) => {
  const store = useStore();
  const categories = useDocPropCount(type);
  const pageConfig = store.config?.pages?.[type] || {};
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
              link={store.getPagePath(type, key)}
              name={key}
              count={categories[key]}
            />
          ))}
        </ul>
      </Box>
    </PageContainer>
  );
};
