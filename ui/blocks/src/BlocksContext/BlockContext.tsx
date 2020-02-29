import React from 'react';
import myStoryStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';

export const CURRENT_SELECTION = '.';
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
    id: previewId,
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
