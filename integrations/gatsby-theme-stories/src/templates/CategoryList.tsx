import React, { FC } from 'react';

import { PageType } from '@component-controls/specification';
import { CategoryList } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryListProps {
  pathContext: {
    type: PageType;
  };
}

const CategroryListTemplate: FC<CategoryListProps> = ({
  pathContext: { type },
}) => {
  return (
    <Layout>
      <CategoryList type={type} />
    </Layout>
  );
};

export default CategroryListTemplate;
