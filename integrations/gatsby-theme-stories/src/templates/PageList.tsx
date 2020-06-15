import React, { FC } from 'react';

import { PageType, defPageType } from '@component-controls/specification';
import { PageList } from '@component-controls/app';
import { Layout } from '../components/Layout';

interface PageListProps {
  pathContext: {
    type: PageType;
  };
}

const PageListTemplate: FC<PageListProps> = ({
  pathContext: { type = defPageType },
}) => {
  return (
    <Layout type={type}>
      <PageList type={type} />
    </Layout>
  );
};

export default PageListTemplate;
