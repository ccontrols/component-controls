import React, { FC } from 'react';
import {
  useStory,
  useCurrentDocument,
  StoryInputProps,
} from '@component-controls/store';
import { StoryBlockContainer } from '../BlockContainer/story';
import { Playground, PlaygroundProps } from '../Playground';
import { Story as StoryComponent } from '../Story';

export interface StoriesOwnProps {
  /**
   * whether to display the dark theme storysource code component
   */
  dark?: boolean;
}
export type StoriesProps = StoriesOwnProps & StoryInputProps & PlaygroundProps;

/**
 * displays multiple stories in ther own Playground components
 *
 */
export const Stories: FC<StoriesProps> = ({ id, name, ...rest }) => {
  const story = useStory({ id, name });
  const doc = useCurrentDocument();
  const stories = doc?.stories
    ? doc.stories.filter((id: string) => !story || story.id !== id)
    : [];
  if (!stories || !stories.length) {
    return null;
  }
  return (
    <StoryBlockContainer {...rest}>
      {stories.map((id: string) => {
        return (
          <Playground
            title="."
            id={id}
            collapsible={false}
            key={`playground-${id}`}
            {...rest}
          >
            <StoryComponent id={id} />
          </Playground>
        );
      })}
    </StoryBlockContainer>
  );
};

Stories.defaultProps = {
  title: 'Stories',
};
