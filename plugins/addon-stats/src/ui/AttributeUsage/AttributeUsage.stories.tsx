import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AttributeUsage } from '.';

export default {
  title: 'Plugins/AddonStats/AttributeUsage',
  component: AttributeUsage,
  category: 'Components',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AttributeUsage />
    </BlockContextProvider>
  );
};
