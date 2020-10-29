import React from 'react';
import { Example } from '@component-controls/core';
import { MockContext } from '@component-controls/blocks';
import { CategoryList } from './CategoryList';

export default {
  title: 'Application/CategoryList',
  component: CategoryList,
};

export const overview: Example = () => (
  <MockContext storyId="id-of-story">
    <CategoryList type="author" />
  </MockContext>
);
