import React from 'react';
import { store } from '@component-controls/store/static_store';
import { BlockContextProvider } from '@component-controls/blocks';
import { API } from '@storybook/api';
import { SET_CURRENT_STORY } from '@storybook/core-events';
import { ThemeProvider } from '../context/ThemeProvider';

export interface AddonPanelProps {
  active?: boolean;
  api: API;
}
export const AddonPanel: React.FC<AddonPanelProps> = ({
  active,
  api,
  children,
}) => {
  const [storyId, setStoryId] = React.useState<string | undefined>();

  const channel = React.useMemo(() => api.getChannel(), []);
  React.useEffect(() => {
    const onChangeStory = (props: any) => {
      setStoryId(props.storyId);
    };
    const { id } = api.getCurrentStoryData() || {};
    setStoryId(id);
    channel.on(SET_CURRENT_STORY, onChangeStory);
    return () => channel.off(SET_CURRENT_STORY, onChangeStory);
  });

  return active && storyId ? (
    <ThemeProvider>
      <BlockContextProvider store={store} storyId={storyId}>
        {children}
      </BlockContextProvider>
    </ThemeProvider>
  ) : null;
};
