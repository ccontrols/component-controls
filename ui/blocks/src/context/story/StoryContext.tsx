import React, { FC } from 'react';
import storyFn from '@component-controls/loader/story-store-data';
import {
  Story,
  StoriesStore,
  StoriesKind,
  StoryComponent,
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';

import { BlockContext, CURRENT_SELECTION, storyIdFromName } from '../context';

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
  /**
   * story id
   */
  id?: string;
  /**
   * the current story object
   */
  story?: Story;
  /**
   * the file/document of stories
   */
  kind?: StoriesKind;
  /**
   * current story's/document's component
   */
  component?: StoryComponent;

  /**
   * access the the fil story store
   */
  store?: StoriesStore;

  /**
   * generic function to update the values of component controls.
   */
  setControlValue?: SetControlValueFn;

  /**
   * generic function to propagate a click event for component controls.
   */
  clickControl?: ClickControlFn;
}

/**
 *
 * Context to be used by components that will display 'story' information
 */
export const useStoryContext = ({
  id,
  name,
}: StoryInputProps): StoryContextProps => {
  const {
    currentId,
    mockStore,
    clickControl,
    setControlValue,
  } = React.useContext(BlockContext);
  const store = mockStore || storyFn();
  const inputId = id === CURRENT_SELECTION ? currentId : id;

  const storyId =
    inputId || (name && storyIdFromName(store, name)) || currentId;

  if (!storyId) {
    return {
      clickControl,
      setControlValue,
    };
  }
  const story: Story = store && store.stories && store.stories[storyId];
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
    kind,
    story,
    component,
    clickControl,
    setControlValue,
    store,
  };
};

export interface StoryContextConsumer {
  children: (context: StoryContextProps) => React.ReactElement;
}
export const StoryContextConsumer: FC<StoryContextConsumer &
  StoryInputProps> = ({ children, ...rest }) => {
  const context = useStoryContext(rest);
  return children(context);
};
