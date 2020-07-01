import React, { FC } from 'react';

import { PageType } from '@component-controls/core';
import { CategoryPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryPageProps {
  pathContext: {
    type: PageType;
    category: string;
    docId?: string;
  };
}

const CategoryPageTemplate: FC<CategoryPageProps> = ({
  pathContext: { type, category, docId },
}) => (
  <Layout type={type} docId={docId}>
    <CategoryPage type={type} category={category} />
  </Layout>
);

export default CategoryPageTemplate;
