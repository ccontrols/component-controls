/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Themed } from 'theme-ui';
import { DocType } from '@component-controls/core';
import { useDocPropCount, useConfig } from '@component-controls/store';
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
  const config = useConfig();
  const categories = useDocPropCount(type);
  const pageConfig = config.pages?.[type] || {};
  return (
    <PageContainer
      type={type}
      variant="categorylist.pagecontainer"
      id="content"
    >
      {pageConfig.label && <Themed.h1>{pageConfig.label}</Themed.h1>}
      <Box variant="categorylist.list">
        <ul>
          {Object.keys(categories).map(key => (
            <CategoryListItem
              key={key}
              type={type}
              name={key}
              count={categories[key].count}
            />
          ))}
        </ul>
      </Box>
    </PageContainer>
  );
};
