import React, { createElement, FC } from 'react';
import { getControlValues } from '@component-controls/core';
import { useStoryContext, StoryInputProps } from '../../context';

export type StoryProps = StoryInputProps;

export const Story: FC<StoryProps> = ({ id, name, ...rest }) => {
  const context = useStoryContext({
    id,
    name,
  });
  const { story } = context;
  // console.log(story);
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
        <div id={story.id} {...rest}>
          {children}
        </div>
      );
    } catch (e) {
      console.error(e);
    }
  }
  return null;
};
