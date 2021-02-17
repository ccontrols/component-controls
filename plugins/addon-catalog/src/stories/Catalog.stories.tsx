import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { Catalog } from '../Catalog';

export default {
  title: 'Plugins/AddonCatalog/Catalog',
  component: Catalog,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <Catalog />
    </BlockContextProvider>
  );
};
