import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Title } from './';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/Title',
  component: Title,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <Title />;
