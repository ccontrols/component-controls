import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ComponentUsageDetails } from '.';

export default {
  title: 'Plugins/AddonStats/ComponentUsageDetails',
  component: ComponentUsageDetails,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ComponentUsageDetails
        stats={{
          stories: [],
          name: 'ArrowButton',
          attributes: {},
          usedBy: { Button: { count: 1, node: {} } },
        }}
      />
    </BlockContextProvider>
  );
};
