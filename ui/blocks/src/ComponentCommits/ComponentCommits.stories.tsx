import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentCommits } from './ComponentCommits';
import { makeDecorators } from '../test/MockContext';
import { store } from '../test/storyStore';

export default {
  title: 'Blocks/ComponentCommits',
  component: ComponentCommits,
  category: ' Component',
} as Document;

export const overview: Example = () => (
  <ComponentCommits
    id="."
    name="Commits"
    storeComponent={store.components['Control']}
  />
);
overview.decorators = makeDecorators();
