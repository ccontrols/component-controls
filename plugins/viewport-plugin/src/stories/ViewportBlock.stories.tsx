import React, { FC } from 'react';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { ViewportBlock } from '../index';

export default {
  title: 'Plugins/ViewportBlock',
  component: ViewportBlock,
};

export const overview: FC = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <ViewportBlock id="." />
    </BlockContextProvider>
  );
};

export const sizes: FC = () => {
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
