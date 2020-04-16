import React, { FC } from 'react';
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
      const { story: selected, kind } = context;
      const stories = kind?.stories
        ? kind.stories.filter((id: string) => !selected || selected.id !== id)
        : [];
      if (!stories || !stories.length) {
        return null;
      }
      return (
        <>
          {stories.map((id: string) => {
            return (
              <Playground
                transform={{
                  options: {
                    disabled: true,
                  },
                }}
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
        </>
      );
    }}
  </StoryBlockContainer>
);

Stories.defaultProps = {
  title: 'Stories',
};
