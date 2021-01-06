import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ViewportBlock } from '../index';

export default {
  title: 'Plugins/ViewportBlock',
  component: ViewportBlock,
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ViewportBlock id="." />
    </BlockContextProvider>
  );
};

export const sizes: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ViewportBlock
        id="."
        sizes={{
          xsmall: 192,
          small: 280,
        }}
      />
    </BlockContextProvider>
  );
};
