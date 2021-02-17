import React from 'react';
import { Document, Example } from '@component-controls/core';
import { ComponentContributors } from './ComponentContributors';
import { store } from '../test/storyStore';

export default {
  title: 'Blocks/ComponentContributors',
  component: ComponentContributors,
  category: ' Component',
} as Document;

export const overview: Example = () => {
  return <ComponentContributors component={store.components['Control']} />;
};

export const caption: Example = () => {
  return (
    <ComponentContributors
      caption="contributors"
      component={store.components['Control']}
    />
  );
};
