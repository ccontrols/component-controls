import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { CategoryList } from './CategoryList';

export default {
  title: 'Application/CategoryList',
  component: CategoryList,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <CategoryList type="author" />;
