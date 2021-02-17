import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentJSX } from './ComponentJSX';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentJSX',
  component: ComponentJSX,
  decorators: mockDecorators,
  category: ' Component',
} as Document;

export const overview: Example = () => <ComponentJSX />;
