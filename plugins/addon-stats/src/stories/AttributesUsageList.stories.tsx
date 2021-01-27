import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AttributesUsageList } from '../ui/AttributesUsageList';

export default {
  title: 'Plugins/AddonStats/AttributesUsageList',
  component: AttributesUsageList,
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AttributesUsageList />
    </BlockContextProvider>
  );
};
