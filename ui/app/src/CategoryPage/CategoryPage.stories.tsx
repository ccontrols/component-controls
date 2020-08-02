import React from 'react';
import { ThemeProvider, MockContext } from '@component-controls/blocks';
import { CategoryPage } from './CategoryPage';

export default {
  title: 'Application/CategoryPage',
  component: CategoryPage,
};

export const overview = () => (
  <ThemeProvider>
    <MockContext storyId="id-of-story">
      <CategoryPage type="author" category="atanasster" />
    </MockContext>
  </ThemeProvider>
);
