import * as React from 'react';
import addons from '@storybook/addons';
import { ConfigApi } from '@storybook/client-api';
import { UPDATE_STORY_CONTEXT } from './types';
export * from './types';

/**
 * function returning the global options
 * parameters and decorators
 */
export const getGlobalOptions = (): any => {
  const store =
    window &&
    (window as any).__STORYBOOK_CLIENT_API__ &&
    (window as any).__STORYBOOK_CLIENT_API__.store();
  //@ts-ignore
  return store._globalMetadata;
};

/**
 * function returning the current story id
 */
export const getCurrentStoryId = (): string | undefined => {
  const store =
    window &&
    (window as any).__STORYBOOK_CLIENT_API__ &&
    (window as any).__STORYBOOK_CLIENT_API__.store();

  const selection = store.getSelection();
  //@ts-ignore
  return selection ? selection.storyId : undefined;
};

let globalStoryId: string | undefined = undefined;
const getGlobalStoryId = (): string => {
  if (globalStoryId === undefined) {
    globalStoryId = getCurrentStoryId() || '.';
  }
  return globalStoryId;
};

/**
 * React hook hook that tracks the changes to the current story and returns it's id
 * @returns a story id as a React hook, when the the current story changes, will call back
 */
export const useStoryId = () => {
  const [storyId, setStoryId] = React.useState<string>(getGlobalStoryId());
  const channel = React.useMemo(() => addons.getChannel(), []);
  React.useEffect(() => {
    const onStoryChange = ({ storyId: id }: { storyId: string }) => {
      if (id !== globalStoryId) {
        globalStoryId = id;
        setStoryId(id);
      }
    };
    channel.on(UPDATE_STORY_CONTEXT, onStoryChange);

    return () => {
      channel.off(UPDATE_STORY_CONTEXT, onStoryChange);
    };
  }, [channel]);
  return storyId;
};

/**
 * React hook hook that tracks the changes to the current story and returns the data
 * @returns a story id , document id, name and parameters
 */

export const useCurrentData = (): {
  storyId: string;
  docId: string;
  name: string;
  parameters: any;
} => {
  const storyId = useStoryId();
  const storyStore = (window as any).__STORYBOOK_CLIENT_API__._storyStore;
  const data = storyStore.fromId(storyId);
  const { kind, name, parameters = {} } = data || {};
  return {
    storyId,
    docId: kind,
    name,
    parameters,
  };
};
/**
 * React hook - returns a context similar (but not identical) that can be used as an input attribute to `<DocsContainer />`
 */
export const useContext = () => {
  const channel = addons.getChannel();
  const storyId = useStoryId();
  const clientApi = (window as any).__STORYBOOK_CLIENT_API__;
  const storyStore = clientApi._storyStore;
  const configApi = new ConfigApi({
    storyStore,
    //@ts-ignore
    channel: addons.getChannel(),
  });
  const context = {
    configApi,
    storyStore,
    channel,
    clientApi,
  };

  const data = storyStore.fromId(storyId);

  const { kind, name, parameters = {} } = data || {};

  return {
    ...context,
    ...data,
    selectedKind: kind,
    selectedStory: name,
    parameters,
    storyId,
  };
};
