import React, { FC } from 'react';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AllyBlock } from '../index';

export default {
  title: 'Plugins/AllyBlock',
  component: AllyBlock,
};

export const overview: FC = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AllyBlock id="." />
    </BlockContextProvider>
  );
};
