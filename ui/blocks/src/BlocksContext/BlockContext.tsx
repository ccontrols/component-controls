import React from 'react';
import myStoryStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesKind,
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
  story?: Story;
  controls?: LoadedComponentControls;
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
  const story: Story = myStoryStore && myStoryStore.stories[previewId];
  const kind = story && story.kind ? myStoryStore.kinds[story.kind] : undefined;
  const source: string | undefined = story ? story.source : undefined;
  let componentName: string;
  if (of === CURRENT_SELECTION) {
    componentName =
      story && story.component ? story.component : kind?.component;
  } else {
    componentName = typeof of === 'string' ? of : of && (of as any).displayName;
  }

  const component =
    componentName && kind && kind.components[componentName]
      ? myStoryStore.components[kind.components[componentName]]
      : undefined;
  const sbStory = (storyStore && storyStore.fromId(previewId)) || {};
  console.log(component);
  return {
    id: previewId,
    api,
    channel,
    source,
    kind,
    story,
    component,
    controls:
      sbStory.controls || (sbStory.parameters && sbStory.parameters.controls),
  };
};
