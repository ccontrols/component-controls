import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { CategoryPage } from './CategoryPage';

export default {
  title: 'Application/CategoryPage',
  component: CategoryPage,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <CategoryPage type="author" category="atanasster" />
  </MockContext>
);
