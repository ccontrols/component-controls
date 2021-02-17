import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentsCatalog } from '../ComponentsCatalog';

export default {
  title: 'Plugins/AddonCatalog/ComponentsCatalog',
  component: ComponentsCatalog,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentsCatalog />
    </BlockContextProvider>
  );
};
