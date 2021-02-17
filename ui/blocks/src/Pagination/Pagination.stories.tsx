/* eslint-disable react/display-name */
import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Pagination } from './Pagination';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Pagination',
  component: Pagination,
  decorators: mockDecorators,
  category: 'Page',
} as Document;

export const overview: Example = () => <Pagination />;
