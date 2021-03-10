import React from 'react';
import { Document, Example } from '@component-controls/core';
import { CommitsPopover } from './CommitsPopover';
import { store } from '../test/storyStore';

export default {
  title: 'Blocks/CommitsPopover',
  component: CommitsPopover,
  category: ' Component',
} as Document;

export const overview: Example = () => (
  <CommitsPopover component={store.components['Control']} />
);
