import React from 'react';
import { ThemeProvider } from '@component-controls/components';
import { MockContext } from '@component-controls/blocks';
import { CategoryList } from './CategoryList';

export default {
  title: 'Application/CategoryList',
  component: CategoryList,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <CategoryList type="author" />
    </MockContext>
  </ThemeProvider>
);
