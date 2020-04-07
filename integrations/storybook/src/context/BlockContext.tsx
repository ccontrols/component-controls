import React from 'react';
import addons from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
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
  const channel = React.useMemo(() => addons.getChannel(), []);
  const onRefresh = () => channel.emit(FORCE_RE_RENDER);
  // this._channel.emit(Events.FORCE_RE_RENDER);
  return (
    <BlocksContextProvider storyId={storyId} onRefresh={onRefresh}>
      {children}
    </BlocksContextProvider>
  );
};
