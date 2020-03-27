import React, { createElement, FC } from 'react';
import { useStoryContext, StoryInputProps } from '../context';

export type StoryProps = StoryInputProps;

export const Story: FC<StoryProps> = ({ id, name, ...rest }) => {
  const { story } = useStoryContext({
    id,
    name,
  });

  if (story && story.renderFn) {
    let children;
    try {
      children = createElement(story.renderFn);
    } catch (e) {
      console.log(e);
    }
    console.log(children);
    if (children) {
      return (
        <div id={story.id} {...rest}>
          {children}
        </div>
      );
    }
  }
  return null;
};
