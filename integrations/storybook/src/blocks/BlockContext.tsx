import React from 'react';
import { toId, storyNameFromExport } from '@storybook/csf';
import myStoryStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';
import { CURRENT_SELECTION, DocsContext } from '@storybook/addon-docs/blocks';

export interface BlockContextProps {
  api?: any;
  channel: any;
  currentId?: string;
  storyStore: any;
  storyIdFromName: (name?: string) => string | undefined;
}
export const BlockContext = React.createContext<BlockContextProps>({
  channel: {},
  storyStore: {},
  storyIdFromName: name => name,
});

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

export interface ControlsContextInputProps {
  /** id of the story */
  id?: string;
  /** name of the story */
  name?: string;
}

export interface ControlsContextProps {
  api?: any;
  channel?: any;
  controls?: LoadedComponentControls;
  args?: StoryArguments;
  story?: any;
  id?: string;
  source?: string;
  fileSource?: string;
  component?: StoryComponent;
}

export const useControlsContext = ({
  id,
  name,
}: ControlsContextInputProps): ControlsContextProps => {
  const {
    currentId,
    storyStore,
    storyIdFromName,
    api,
    channel,
  } = React.useContext(BlockContext);
  const inputId = id === CURRENT_SELECTION ? currentId : id;
  const previewId = inputId || storyIdFromName(name);
  if (!previewId) {
    return {
      api,
      channel,
    };
  }
  const story = storyStore.fromId(previewId) || {};
  // console.log(myStoryStore);
  const myStory: Story = myStoryStore && myStoryStore.stories[previewId];
  const kindTitle = myStory.kind;
  const kind = kindTitle ? myStoryStore.kinds[kindTitle] : undefined;
  const source: string | undefined = myStory ? myStory.source : undefined;
  return {
    api,
    channel,
    story,
    source,
    fileSource: kind ? kind.source : undefined,
    component: kind ? kind.component : undefined,
    args: myStory.arguments,
    controls: story.controls || story.parameters.controls,
  };
};
