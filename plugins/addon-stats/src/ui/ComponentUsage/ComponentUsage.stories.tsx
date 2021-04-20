import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentUsage } from '.';

export default {
  title: 'Plugins/AddonStats/ComponentUsage',
  component: ComponentUsage,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentUsage />
    </BlockContextProvider>
  );
};
