import React, { FC } from 'react';
import { Story } from '@component-controls/specification';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { Playground, PlaygroundProps } from '../Playground';
import { Story as StoryComponent } from '../Story';

export interface StoriesOwnProps {
  /**
   * whether to display the dark theme storysource code component
   */
  dark?: boolean;
}
export type StoriesProps = StoriesOwnProps &
  Omit<StoryBlockContainerProps, 'children'> &
  PlaygroundProps;

/**
 * displays multiple stories in ther own Playground components
 *
 */
export const Stories: FC<StoriesProps> = props => (
  <StoryBlockContainer {...props}>
    {(context, rest) => {
      const { story: selected, kind, getStory } = context;
      const stories = kind?.stories
        ?.map((id: string) => getStory(id))
        .filter(
          (story?: Story) => !selected || (story && selected.id !== story.id),
        );
      if (!stories || !stories.length) {
        return null;
      }
      return (
        <>
          {(stories as Story[]).map((story: Story) => {
            const storyTitle = story.name;
            return (
              <Playground
                transform={{
                  options: {
                    disabled: true,
                  },
                }}
                title={storyTitle}
                collapsible={false}
                key={`playground-${story.id}`}
                {...rest}
              >
                <StoryComponent id={story.id} />
              </Playground>
            );
          })}
        </>
      );
    }}
  </StoryBlockContainer>
);

Stories.defaultProps = {
  title: 'Stories',
};
