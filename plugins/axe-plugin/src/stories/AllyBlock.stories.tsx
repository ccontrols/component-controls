import React from 'react';
import { Store } from '@component-controls/store';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AxeAllyBlock } from '../index';

export default {
  title: 'Plugins/AxeAllyBlock',
  component: AxeAllyBlock,
};

export const overview = () => {
  const storyStore = React.useMemo(
    () => new Store({ store, updateLocalStorage: false }),
    [],
  );
  return (
    <BlockContextProvider
      storyId="blocks-core-story-plain--controls"
      store={storyStore}
    >
      <AxeAllyBlock id="." />
    </BlockContextProvider>
  );
};
