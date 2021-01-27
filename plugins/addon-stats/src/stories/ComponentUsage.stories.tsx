import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentUsage } from '../ui/ComponentUsage';

export default {
  title: 'Plugins/AddonStats/ComponentUsage',
  component: ComponentUsage,
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
