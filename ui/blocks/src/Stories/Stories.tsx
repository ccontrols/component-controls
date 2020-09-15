import React, { FC } from 'react';
import {
  useStory,
  useCurrentDocument,
  StoryInputProps,
  useStore,
} from '@component-controls/store';
import { StoryBlockContainer } from '../BlockContainer/story';
import { StoryPlayground, StoryPlaygroundProps } from '../Playground';
import { Story as Component } from '../Story';

export interface StoriesOwnProps {
  /**
   * whether to display the dark theme storysource code component
   */
  dark?: boolean;
}
export type StoriesProps = StoriesOwnProps &
  StoryInputProps &
  StoryPlaygroundProps;

/**
 * displays multiple stories in ther own Playground components
 *
 */
export const Stories: FC<StoriesProps> = ({ id, name, title, ...rest }) => {
  const story = useStory({ id, name });
  const doc = useCurrentDocument();
  const store = useStore();
  const stories = doc?.stories
    ? doc.stories.filter((id: string) => !story || story.id !== id)
    : [];
  if (!stories || !stories.length) {
    return null;
  }
  return (
    <StoryBlockContainer title={title} {...rest}>
      {stories.map((id: string) => {
        const story = store.stories[id];
        return (
          <StoryPlayground
            title={story.name}
            id={id}
            collapsible={false}
            key={`playground-${id}`}
            storyProps={{ id }}
            {...rest}
          >
            <Component id={id} />
          </StoryPlayground>
        );
      })}
    </StoryBlockContainer>
  );
};

Stories.defaultProps = {
  title: 'Stories',
};
