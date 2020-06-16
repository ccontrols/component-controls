import React, { FC } from 'react';

import { PageType } from '@component-controls/core';
import { CategoryPage } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryPageProps {
  pathContext: {
    type: PageType;
    category: string;
    doc: string;
  };
}

const CategoryPageTemplate: FC<CategoryPageProps> = ({
  pathContext: { type, category, doc },
}) => (
  <Layout type={type} docId={doc}>
    <CategoryPage type={type} category={category} />
  </Layout>
);

export default CategoryPageTemplate;
