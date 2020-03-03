import React from 'react';
import myStoryStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesKind,
  StoryArguments,
  StoryComponent,
} from '@component-controls/specification';
import { LoadedComponentControls } from '@component-controls/core';
import { toId, storyNameFromExport } from '@storybook/csf';

export const CURRENT_SELECTION = '.';
export interface BlockContextProps {
  api?: any;
  channel?: any;
  currentId?: string;
  storyStore?: any;
}
export const BlockContext = React.createContext<BlockContextProps>({});

export interface StoryInputProps {
  /** id of the story */
  id?: string;
  /** name of the story */
  name?: string;
}

export interface ComponentInputProps {
  /** component */
  of?: '.' | any;
}

export interface ControlsContextProps {
  api?: any;
  channel?: any;
  story?: any;
  controls?: LoadedComponentControls;
  args?: StoryArguments;
  id?: string;
  source?: string;
  kind?: StoriesKind;
  component?: StoryComponent;
}

export const useControlsContext = ({
  id,
  name,
  of = CURRENT_SELECTION,
}: StoryInputProps & ComponentInputProps): ControlsContextProps => {
  const { currentId, storyStore, api, channel } = React.useContext(
    BlockContext,
  );
  const inputId = id === CURRENT_SELECTION ? currentId : id;

  const storyIdFromName = (name: string): string | undefined => {
    const kinds = Object.keys(myStoryStore.kinds);
    for (let i = 0; i < kinds.length; i += 1) {
      const title = kinds[i];
      const storyId = toId(title, storyNameFromExport(name));
      if (myStoryStore.kinds[title].stories.indexOf(storyId) > -1) {
        return storyId;
      }
    }
    return undefined;
  };

  const previewId = inputId || (name && storyIdFromName(name)) || currentId;
  if (!previewId) {
    return {
      api,
      channel,
    };
  }
  const myStory: Story = myStoryStore && myStoryStore.stories[previewId];
  const kind =
    myStory && myStory.kind ? myStoryStore.kinds[myStory.kind] : undefined;
  const source: string | undefined = myStory ? myStory.source : undefined;
  let component;
  if (of === CURRENT_SELECTION) {
    component =
      myStory && myStory.component
        ? myStoryStore.components[myStory.component]
        : kind
        ? myStoryStore.components[kind.component]
        : undefined;
  } else {
    component = of;
  }

  const story = (storyStore && storyStore.fromId(previewId)) || {};
  if (component && !component.info && story && story.parameters.component) {
    component.info = story.parameters.component.__docgenInfo;
  }
  return {
    id: previewId,
    api,
    channel,
    source,
    kind,
    story,
    component,
    args: myStory.arguments,
    controls: story.controls || (story.parameters && story.parameters.controls),
  };
};
