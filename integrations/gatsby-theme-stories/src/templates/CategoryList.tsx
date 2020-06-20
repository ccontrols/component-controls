import React, { FC } from 'react';

import { PageType } from '@component-controls/core';
import { CategoryList } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface CategoryListProps {
  pathContext: {
    type: PageType;
    doc: string;
  };
}

const CategroryListTemplate: FC<CategoryListProps> = ({
  pathContext: { type, doc },
}) => {
  return (
    <Layout type={type} docId={doc}>
      <CategoryList type={type} />
    </Layout>
  );
};

export default CategroryListTemplate;
