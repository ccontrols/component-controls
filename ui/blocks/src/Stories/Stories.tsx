import React, { FC } from 'react';
import { Story } from '@component-controls/specification';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { Playground, PlaygroundProps } from '../Playground';
import { Story as StoryComponent } from '../Story';

export type StoriesProps = Omit<StoryBlockContainerProps, 'children'> &
  PlaygroundProps;

export const Stories: FC<StoriesProps> = props => (
  <StoryBlockContainer {...props}>
    {(context, rest) => {
      const { story: selected, store, kind } = context;
      const stories =
        store &&
        kind?.stories
          ?.map((id: string) => store.stories[id])
          .filter((story: Story) => !selected || selected.id !== story.id);
      if (!stories || !stories.length) {
        return null;
      }
      return (
        <>
          {stories.map((story: Story) => {
            const storyTitle = story.name;
            return (
              <Playground
                transform={{
                  options: {
                    disabled: true,
                  },
                }}
                key={`playground-${story.id}`}
                {...rest}
              >
                <StoryComponent
                  id={story.id}
                  title={storyTitle}
                  collapsible={false}
                />
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
