import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Search } from './Search';
import { mockDecorators } from '../test/MockContext';
export default {
  title: 'Blocks/Search',
  component: Search,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <Search />;
