import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentStats } from './ComponentStats';
import { store } from '../test/storyStore';

export default {
  title: 'Blocks/ComponentStats',
  component: ComponentStats,
  category: ' Component',
} as Document;

export const overview: Example = () => (
  <ComponentStats component={store.components['Control']} />
);
