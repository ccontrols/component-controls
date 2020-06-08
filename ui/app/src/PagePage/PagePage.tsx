/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';
import { PageContainer } from '@component-controls/blocks';

export const PagePage: FC = () => {
  return <PageContainer sx={{ flex: '1 0 auto' }} id="content" padding={0} />;
};
