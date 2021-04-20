import React from 'react';
import { Document, Example } from '@component-controls/core';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AllyBlock } from '../index';

export default {
  title: 'Plugins/AllyBlock',
  component: AllyBlock,
  category: 'Testing',
} as Document;

export const overview: Example = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AllyBlock id="." />
    </BlockContextProvider>
  );
};
