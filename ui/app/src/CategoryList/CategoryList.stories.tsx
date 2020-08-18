import React from 'react';
import { MockContext } from '@component-controls/blocks';
import { CategoryList } from './CategoryList';

export default {
  title: 'Application/CategoryList',
  component: CategoryList,
};

export const overview = () => (
  <MockContext storyId="id-of-story">
    <CategoryList type="author" />
  </MockContext>
);
