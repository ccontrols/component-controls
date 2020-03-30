import React from 'react';
import { BlockContextProvider as BlocksContextProvider } from '@component-controls/blocks';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const BlockContextProvider: React.FC = ({ children }) => {
  const context = React.useContext(DocsContext);
  const { id } = context as any;
  return (
    <BlocksContextProvider currentId={id}>{children}</BlocksContextProvider>
  );
};
