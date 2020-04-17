import React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import { ConfigApi } from '@storybook/client-api';

export const getContext = () => {
  const channel = addons.getChannel();
  //@ts-ignore
  const clientApi = window.__STORYBOOK_CLIENT_API__;
  const storyStore = clientApi._storyStore;
  const configApi = new ConfigApi({
    storyStore,
  });
  const context = {
    configApi,
    storyStore,
    channel,
    clientApi,
  };
  const { storyId } = storyStore.getSelection();

  const data = storyStore.fromId(storyId);

  const { kind, name, parameters = {} } = data || {};

  return {
    ...context,
    ...data,
    selectedKind: kind,
    selectedStory: name,
    parameters,
  };
};

export const useStoryId = (defaultId: string = '.') => {
  const [storyId, setStoryId] = React.useState<string>(defaultId);
  const channel = React.useMemo(() => addons.getChannel(), []);
  React.useEffect(() => {
    const onStoryChange = (id: string) => {
      setStoryId(id);
    };

    channel.on(STORY_CHANGED, onStoryChange);
    return () => {
      channel.off(STORY_CHANGED, onStoryChange);
    };
  }, []);
  return storyId;
};
