import React from 'react';
import { BlockContextProvider } from '@component-controls/blocks';
import { API } from '@storybook/api';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { ControlsTable } from '../blocks/ControlsTable';

export interface ControlsPanelProps {
  active?: boolean;
  api: API;
}
export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  active,
  api,
}) => {
  const channel = React.useMemo(() => api.getChannel(), []);
  return active ? (
    <BlockContextProvider
      storyId="storybook-controls--text-default-prop"
      onRefresh={() => channel.emit(FORCE_RE_RENDER)}
    >
      <ControlsTable id="." />
    </BlockContextProvider>
  ) : null;
};
