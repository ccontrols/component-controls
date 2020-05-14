/** @jsx jsx */
import { FC, createElement, forwardRef } from 'react';
import { jsx, Box } from 'theme-ui';
import { deepMerge, StoryRenderFn } from '@component-controls/specification';
import { getControlValues } from '@component-controls/core';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

export type StoryProps = StoryBlockContainerProps & {
  ref?: React.Ref<HTMLDivElement>;
};

export const Story: FC<StoryProps> = forwardRef(
  (props: StoryProps, ref: React.Ref<HTMLDivElement>) => (
    <StoryBlockContainer {...props}>
      {(context, rest) => {
        const { story, options = {} } = context;
        if (story && story.renderFn) {
          try {
            const values = getControlValues(story.controls);
            const { decorators: globalDecorators = [] } = options;
            const { decorators: storyDecorators = [] } = story;
            const decorators = deepMerge(globalDecorators, storyDecorators);
            const renderFn = decorators.reduce(
              (acc: StoryRenderFn, item: StoryRenderFn) => () =>
                item(acc, { context }),
              //@ts-ignore
              () => story.renderFn(values, { context }),
            );
            return (
              <Box
                id={story.id}
                sx={{
                  px: 4,
                  py: 3,
                }}
                {...rest}
              >
                <div
                  className="story-render-container"
                  style={{ all: 'unset' }}
                  ref={ref}
                >
                  {createElement(renderFn)}
                </div>
              </Box>
            );
          } catch (e) {
            console.error(e);
          }
        }
        console.error('Story function not found', props, story);
        return null;
      }}
    </StoryBlockContainer>
  ),
);

Story.displayName = 'Story';
