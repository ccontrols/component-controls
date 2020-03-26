import React, { createElement, FC } from 'react';
import { useStoryContext, StoryInputProps } from '../context';

export type StoryProps = StoryInputProps;

export const Story: FC<StoryProps> = ({ id, name, ...rest }) => {
  const { story } = useStoryContext({
    id,
    name,
  });
  return story && story.renderFn ? (
    <div id={story.id} {...rest}>
      {createElement(story.renderFn)}
    </div>
  ) : null;
};
