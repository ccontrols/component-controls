import React from 'react';
import { Document, Example } from '@component-controls/core';
import { LocalDependencies } from './LocalDependencies';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/LocalDependencies',
  component: LocalDependencies,
  decorators: mockDecorators,
  category: ' Component',
} as Document;

export const overview: Example = () => <LocalDependencies />;
