/* eslint-disable react/display-name */
import { createElement } from 'react';
import {
  StoryRenderFn,
  getControlValues,
  deepMerge,
  FrameworkRenderFn,
} from '@component-controls/core';

export const render: FrameworkRenderFn = ({ story, doc, options }) => {
  if (!story) {
    throw new Error(`Invalid story`);
  }
  const controls = story.controls;
  const values = getControlValues(controls);
  //parameters added to avoid bug in SB6 rc that assumes parameters exist
  const context = {
    story,
    doc,
    controls,
    ...options,
  };
  const { decorators: globalDecorators = [] } = options || {};
  const { decorators: storyDecorators = [] } = story;
  const decorators = deepMerge<StoryRenderFn[]>(
    globalDecorators,
    storyDecorators,
  );
  const sortedDecorators = decorators.reverse();
  let renderFn = story.renderFn;
  for (let i = 0; i < sortedDecorators.length; i += 1) {
    const decorator = sortedDecorators[i];
    const childFn = renderFn;
    const nextRenderFn = (_: any, nextContext: any) =>
      (childFn as StoryRenderFn)(values, { ...context, ...nextContext });
    renderFn = () =>
      decorator(nextRenderFn, {
        ...context,
        renderFn: nextRenderFn,
      });
  }
  return typeof renderFn === 'function'
    ? createElement(() => (renderFn as StoryRenderFn)(values, context))
    : createElement('div', 'invalid render function');
};
