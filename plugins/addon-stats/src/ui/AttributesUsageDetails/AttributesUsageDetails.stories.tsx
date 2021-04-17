import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AttributesUsageDetails } from '.';

export default {
  title: 'Plugins/AddonStats/AttributesUsageDetails',
  component: AttributesUsageDetails,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AttributesUsageDetails
        stats={{
          attribute: 'ref',
          componentsCount: 4,
          usedByCount: 10,
          components: {
            Component: { name: 'Component', count: 4 },
            Box: { name: 'Box', count: 2 },
          },
        }}
      />
    </BlockContextProvider>
  );
};
