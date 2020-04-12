import React, { FC } from 'react';
import {
  Story,
  StoriesKind,
  StoryComponent,
} from '@component-controls/specification';

import { BlockContext, BlockDataContext } from '../block';
import { CURRENT_STORY } from '../../utils';

export interface StoryInputProps {
  /** id of the story */
  id?: string;
  /**
   * alternatively you can use the name of a story to load from an external file
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
   * returns a story, given a story id
   */
  getStory: (storyId?: string) => Story | undefined;
}

/**
 *
 * Context to be used by components that will display 'story' information
 */
export const useStoryContext = ({
  id,
  name,
}: StoryInputProps): StoryContextProps => {
  const { story: currentStory } = React.useContext(BlockContext);
  const { getStoryData, getStory, storyIdFromName } = React.useContext(
    BlockDataContext,
  );
  const currentId = currentStory ? currentStory.id : undefined;
  const inputId = id === CURRENT_STORY ? currentId : id;
  const storyId = inputId || (name && storyIdFromName(name)) || currentId;
  if (!storyId) {
    return { getStory };
  }
  const { story, kind, component } = getStoryData(storyId);
  return {
    id: storyId,
    kind,
    story,
    component,
    getStory,
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
