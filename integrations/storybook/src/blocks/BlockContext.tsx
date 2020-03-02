import React from 'react';
import { BlockContext } from '@component-controls/blocks';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const BlockContextProvider: React.FC = ({ children }) => {
  const context = React.useContext(DocsContext);
  const { id: currentId, clientApi, storyStore, channel } = context as any;

  return (
    <BlockContext.Provider
      value={{
        api: clientApi,
        currentId,
        channel,
        storyStore,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
