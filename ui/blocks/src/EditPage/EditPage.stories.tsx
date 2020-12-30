import React from 'react';
import { Document, Example } from '@component-controls/core';
import { EditPage } from './EditPage';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/EditPage',
  component: EditPage,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <EditPage />;
