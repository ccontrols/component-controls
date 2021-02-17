import React from 'react';
import { Document, Example } from '@component-controls/core';
import { mockDecorators } from '@component-controls/blocks';
import { App } from './App';

export default {
  title: 'Application/App',
  component: App,
  decorators: mockDecorators,
  category: 'Application',
} as Document;

export const overview: Example = () => <App />;
