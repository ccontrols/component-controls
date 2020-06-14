import React, { FC } from 'react';

import { PageType } from '@component-controls/specification';
import { CategoryPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryPageProps {
  pathContext: {
    type: PageType;
    category: string;
  };
}

const CategoryPageTemplate: FC<CategoryPageProps> = ({
  pathContext: { type, category },
}) => (
  <Layout>
    <CategoryPage type={type} category={category} />
  </Layout>
);

export default CategoryPageTemplate;
