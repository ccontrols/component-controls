/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { PageContainer } from '@component-controls/blocks';

export const BlogPage: FC = () => {
  return (
    <PageContainer sx={{ flex: '1 0 auto' }} maxWidth="1200px" id="content" />
  );
};
