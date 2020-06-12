/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx } from 'theme-ui';
import { PageType } from '@component-controls/specification';
import { Title } from '@component-controls/components';
import { PageContainer, BlockContext } from '@component-controls/blocks';
import { CategoryListItem } from './CategoryListItem';

export interface CategoryListProps {
  type: PageType;
}
export const CategoryList: FC<CategoryListProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const categories = storeProvider?.getUniquesByCategory(type) || [];
  const pageConfig = storeProvider?.config?.pages?.[type] || {};
  return (
    <PageContainer sx={{ flex: '1 0 auto' }} maxWidth="1000px" id="content">
      <Title>{pageConfig.label}</Title>
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
    </PageContainer>
  );
};
