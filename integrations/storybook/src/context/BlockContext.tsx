import React from 'react';
import { BlockContextProvider as BlocksContextProvider } from '@component-controls/blocks';
import { DocsContext } from '@storybook/addon-docs/blocks';

export interface BlockContextProviderProps {
  id?: string;
}
export const BlockContextProvider: React.FC<BlockContextProviderProps> = ({
  children,
  id,
}) => {
  let storyId: string;
  if (!id) {
    const context = React.useContext(DocsContext);
    ({ id: storyId } = context as any);
  } else {
    storyId = id;
  }
  return (
    <BlocksContextProvider storyId={storyId}>{children}</BlocksContextProvider>
  );
};
