import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ExternalDependencies } from './ExternalDependencies';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ExternalDependencies',
  component: ExternalDependencies,
  decorators: mockDecorators,
  category: ' Component',
} as Document;

export const overview: Example = () => <ExternalDependencies />;
