import React from 'react';
import { BlockContextProvider } from '@component-controls/blocks';
import { API } from '@storybook/api';
import { SET_CURRENT_STORY } from '@storybook/core-events';
import { ControlsTable } from '../blocks/ControlsTable';

export interface ControlsPanelProps {
  active?: boolean;
  api: API;
}
export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  active,
  api,
}) => {
  const [storyId, setStoryId] = React.useState<string | undefined>();
  const channel = React.useMemo(() => api.getChannel(), []);
  React.useEffect(() => {
    const onChangeStory = (props: any) => {
      setStoryId(props.storyId);
    };
    channel.on(SET_CURRENT_STORY, onChangeStory);
    return () => channel.off(SET_CURRENT_STORY, onChangeStory);
  });

  return active && storyId ? (
    <BlockContextProvider storyId={storyId}>
      <ControlsTable id="." />
    </BlockContextProvider>
  ) : null;
};
