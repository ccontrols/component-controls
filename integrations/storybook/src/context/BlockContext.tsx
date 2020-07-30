import React from 'react';
import { BlockContextProvider as BlocksContextProvider } from '@component-controls/blocks';
import { store } from '@component-controls/store/live_store';
import { useStoryId } from '@component-controls/storybook-custom-docs';

export interface BlockContextProviderProps {
  id?: string;
}
export const BlockContextProvider: React.FC<BlockContextProviderProps> = ({
  children,
  id,
}) => {
  const defaultStoyId = useStoryId();
  const storyId = id ? id : defaultStoyId;
  const docId = storyId && store ? store.stories[storyId].doc : undefined;
  return (
    <BlocksContextProvider store={store} storyId={storyId} docId={docId}>
      {children}
    </BlocksContextProvider>
  );
};
