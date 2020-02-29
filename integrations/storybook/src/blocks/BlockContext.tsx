import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import { BlockContext } from '@component-controls/blocks';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const BlockContextProvider: React.FC = ({ children }) => {
  const context = React.useContext(DocsContext);
  const {
    id: currentId,
    clientApi,
    storyStore,
    mdxStoryNameToKey,
    mdxComponentMeta,
    channel,
  } = context as any;

  const storyIdFromName = (name?: string): string | undefined => {
    return (
      mdxStoryNameToKey &&
      mdxComponentMeta &&
      name &&
      toId(
        mdxComponentMeta.id || mdxComponentMeta.title,
        storyNameFromExport(mdxStoryNameToKey[name]),
      )
    );
  };
  return (
    <BlockContext.Provider
      value={{
        api: clientApi,
        currentId,
        channel,
        storyIdFromName,
        storyStore,
      }}
    >
      {children}
    </BlockContext.Provider>
  );
};
