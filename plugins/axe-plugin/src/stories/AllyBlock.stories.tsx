import React, { FC } from 'react';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AxeAllyBlock } from '../index';

export default {
  title: 'Plugins/AxeAllyBlock',
  component: AxeAllyBlock,
};

export const overview: FC = () => {
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={store}
    >
      <AxeAllyBlock id="." />
    </BlockContextProvider>
  );
};
