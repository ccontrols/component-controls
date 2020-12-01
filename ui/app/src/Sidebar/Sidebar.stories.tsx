import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { Sidebar } from './Sidebar';

export default {
  title: 'Application/Sidebar',
  component: Sidebar,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <Sidebar title="sidebar" type="story" />;
