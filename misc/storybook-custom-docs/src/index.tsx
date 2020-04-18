import * as React from 'react';
import addons from '@storybook/addons';
import { STORY_CHANGED } from '@storybook/core-events';
import { ConfigApi } from '@storybook/client-api';
export * from './types';

/**
 * Returns a context similar (but not identical) that can be used as an input attribute to `<DocsContainer />`
 */
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
/**
 * React hook hook that tracks the changes to the current story and returns it's id
 * @param defaultId initial story value, if not provided will return the current story
 * @returns a story id as a React hook, when the the current story changes, will call back
 */
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
