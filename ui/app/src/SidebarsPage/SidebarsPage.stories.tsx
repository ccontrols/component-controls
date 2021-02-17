import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { SidebarsPage } from './SidebarsPage';

export default {
  title: 'Application/SidebarsPage',
  component: SidebarsPage,
  decorators: mockDecorators,
  category: 'Pages',
} as Document;

export const overview: Example = () => <SidebarsPage type="story" />;
