/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { PageContainer } from '@component-controls/blocks';

export const BlogPage: FC = () => {
  return <PageContainer sx={{ maxWidth: '1000px' }} id="content" />;
};
