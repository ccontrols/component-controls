import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext } from '@component-controls/blocks';
import { PageList } from './PageList';

export default {
  title: 'Application/PageList',
  component: PageList,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <PageList type="story" />
    </MockContext>
  </ThemeProvider>
);
