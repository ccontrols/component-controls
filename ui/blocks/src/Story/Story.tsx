/** @jsx jsx */
import { createElement, FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { getControlValues } from '@component-controls/core';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

export type StoryProps = Omit<StoryBlockContainerProps, 'children'>;

export const Story: FC<StoryProps> = (props: StoryProps) => (
  <StoryBlockContainer {...props}>
    {(context, rest) => {
      const { story } = context;
      if (story && story.renderFn) {
        let children;
        try {
          const values = story.controls ? getControlValues(story.controls) : {};
          children = createElement(
            'div',
            null,
            story.renderFn(values, { context }),
          );
          return (
            <Box id={story.id} sx={{ px: 3 }} {...rest}>
              {children}
            </Box>
          );
        } catch (e) {
          console.error(e);
        }
      }
      return null;
    }}
  </StoryBlockContainer>
);
