import React from 'react';
import addons from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { BlockContextProvider as BlocksContextProvider } from '@component-controls/blocks';
import { DocsContext } from '@storybook/addon-docs/blocks';

export const BlockContextProvider: React.FC = ({ children }) => {
  const context = React.useContext(DocsContext);
  const channel = React.useMemo(() => addons.getChannel(), []);
  const { id } = context as any;
  const onRefresh = () => channel.emit(FORCE_RE_RENDER);

  // this._channel.emit(Events.FORCE_RE_RENDER);
  return (
    <BlocksContextProvider
      currentId={id}
      onRefresh={onRefresh}
      postMessage={true}
    >
      {children}
    </BlocksContextProvider>
  );
};
