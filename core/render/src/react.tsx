/* eslint-disable react/display-name */
import { createElement } from 'react';
import {
  StoryRenderFn,
  getControlValues,
  deepMerge,
  FrameworkRenderFn,
} from '@component-controls/core';

export const render: FrameworkRenderFn = (story, doc, options: any = {}) => {
  if (!story) {
    throw new Error(`Invalid story`);
  }
  if (!doc) {
    throw new Error(`Invalid doc`);
  }
  const controls = story.controls;
  const values = getControlValues(controls);
  //parameters added to avoid bug in SB6 rc that assumes parameters exist
  const context = { story, doc, controls, parameters: {} };

  const { decorators: globalDecorators = [] } = options;
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
    renderFn = () =>
      decorator(
        (_: any, nexContext: any) =>
          (childFn as StoryRenderFn)(values, { ...context, ...nexContext }),
        {
          ...context,
          renderFn: childFn,
        },
      );
  }
  let node: any = null;
  node = () => (renderFn as StoryRenderFn)(values, context);
  return createElement(node);
};
