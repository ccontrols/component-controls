import React, { FC } from 'react';

import { DocType } from '@component-controls/core';
import { CategoryPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryPageProps {
  pageContext: {
    type: DocType;
    category: string;
    docId?: string;
  };
}

const CategoryPageTemplate: FC<CategoryPageProps> = ({
  pageContext: { type, category, docId },
}) => (
  <Layout docId={docId}>
    <CategoryPage type={type} category={category} />
  </Layout>
);

export default CategoryPageTemplate;
