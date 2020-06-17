import React, { FC } from 'react';
import { Store } from '@component-controls/store';
import { BlockContextProvider, store } from '@component-controls/blocks';
import { AxeAllyBlock } from '../index';

export default {
  title: 'Plugins/AxeAllyBlock',
  component: AxeAllyBlock,
};

export const overview: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
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
