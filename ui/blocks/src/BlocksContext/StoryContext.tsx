import React from 'react';
import storyStore from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';
import { BlockContext, CURRENT_SELECTION, storyIdFromName } from './shared';

export interface StoryInputProps {
  /** id of the story */
  id?: string;
  /**
   * or - name of the story if in an external file
   * will be used to find the story
   */
  name?: string;
}

export interface StoryContextProps {
  id?: string;
  api?: any;
  channel?: any;
  story?: Story;
  kind?: StoriesKind;
  component?: StoryComponent;
}

/**
 *
 * Context to be used by components that will display 'story' information
 */
export const useStoryContext = ({
  id,
  name,
}: StoryInputProps): StoryContextProps => {
  const { currentId, api, channel, mockStore } = React.useContext(BlockContext);
  const store = mockStore || storyStore;
  const inputId = id === CURRENT_SELECTION ? currentId : id;

  const storyId =
    inputId || (name && storyIdFromName(store, name)) || currentId;

  if (!storyId) {
    return {
      api,
      channel,
    };
  }
  const story: Story = store && store.stories[storyId];
  const kind = story && story.kind ? store.kinds[story.kind] : undefined;
  const storyComponent: any = story ? story.component : undefined;
  const componentName = storyComponent
    ? typeof storyComponent === 'string'
      ? storyComponent
      : storyComponent.name || storyComponent.displayName
    : undefined;
  const component =
    componentName && kind && kind.components[componentName]
      ? store.components[kind.components[componentName]]
      : undefined;
  return {
    id: storyId,
    api,
    channel,
    kind,
    story,
    component,
  };
};
