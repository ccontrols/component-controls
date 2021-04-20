import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentCard } from '.';

export default {
  title: 'Plugins/AddonCatalog/ComponentCard',
  component: ComponentCard,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentCard id="." />
    </BlockContextProvider>
  );
};
