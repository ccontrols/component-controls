import React, { FC, useState, useEffect } from 'react';
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
}

/**
 *
 * Context to be used by components that will display 'story' information
 */
export const useStoryContext = ({
  id = CURRENT_STORY,
  name,
}: StoryInputProps): StoryContextProps => {
  const { storyId: currentId, storeProvider } = React.useContext(BlockContext);
  const { getStoryData, storyIdFromName } = React.useContext(BlockDataContext);
  const storyId = name
    ? storyIdFromName(name)
    : id === CURRENT_STORY
    ? currentId
    : id;
  const [data, setData] = useState<{
    story?: Story;
    kind?: StoriesKind;
    component?: StoryComponent;
  }>(getStoryData(storyId));

  const updateData = () => {
    const { story, kind, component } = getStoryData(storyId);
    setData({ story, kind, component });
  };
  useEffect(() => {
    const onChange = (id?: string) => {
      if (storyId === id) {
        updateData();
      }
    };
    storeProvider.addObserver(onChange);

    return () => {
      storeProvider.removeObserver(onChange);
    };
  }, []);

  useEffect(() => {
    const { story } = data;
    if (!story || story.id !== storyId) {
      updateData();
    }
  }, [storyId]);

  return {
    id: storyId,
    ...data,
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
