import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentList } from '.';

export default {
  title: 'Plugins/AddonCatalog/ComponentList',
  component: ComponentList,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentList
        stories={[
          'blocks-core-story-plain--controls',
          'blocks-core-story-plain--controls',
          'blocks-core-story-plain--controls',
          'blocks-core-story-plain--controls',
        ]}
      />
    </BlockContextProvider>
  );
};
