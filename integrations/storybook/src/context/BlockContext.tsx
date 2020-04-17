import React from 'react';
import { BlockContextProvider as BlocksContextProvider } from '@component-controls/blocks';
import { useStoryId } from '@component-controls/storybook-custom-docs';

export interface BlockContextProviderProps {
  id?: string;
}
export const BlockContextProvider: React.FC<BlockContextProviderProps> = ({
  children,
  id,
}) => {
  const defaultStoyId = useStoryId(id);
  const storyId = id ? id : defaultStoyId;
  return (
    <BlocksContextProvider storyId={storyId}>{children}</BlocksContextProvider>
  );
};
