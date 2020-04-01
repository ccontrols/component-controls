/** @jsx jsx */
import { createElement, FC } from 'react';
import { jsx, Box } from 'theme-ui';
import { getControlValues } from '@component-controls/core';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';

export type StoryProps = Omit<StoryBlockContainerProps, 'children'>;

interface RenderStoryProps {
  renderFn: (controlValues: { [key: string]: any }, context: any) => any;
  values: { [key: string]: any };
  context: any;
}

const RenderStory: FC<RenderStoryProps> = ({ renderFn, values, context }) =>
  createElement('div', null, renderFn(values, { context }));

export const Story: FC<StoryProps> = (props: StoryProps) => (
  <StoryBlockContainer {...props}>
    {(context, rest) => {
      const { story } = context;
      if (story?.renderFn) {
        try {
          const values = story.controls ? getControlValues(story.controls) : {};
          return (
            <Box id={story.id} sx={{ px: 3 }} {...rest}>
              <RenderStory
                renderFn={story.renderFn}
                values={values}
                context={context}
              />
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
