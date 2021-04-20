import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AttributesUsageList } from '.';

export default {
  title: 'Plugins/AddonStats/AttributesUsageList',
  component: AttributesUsageList,
  category: 'Components',
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
