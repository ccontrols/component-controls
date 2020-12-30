import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { CategoryPage } from './CategoryPage';

export default {
  title: 'Application/CategoryPage',
  component: CategoryPage,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => (
  <CategoryPage type="author" category="atanasster" />
);
