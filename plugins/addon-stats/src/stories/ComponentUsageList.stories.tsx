import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentUsageList } from '../ui/ComponentUsageList';

export default {
  title: 'Plugins/AddonStats/ComponentUsageList',
  component: ComponentUsageList,
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentUsageList />
    </BlockContextProvider>
  );
};
