import { createElement } from 'react';
import {
  StoryRenderFn,
  getControlValues,
  deepMerge,
  FrameworkRenderFn,
} from '@component-controls/core';

const isPromise = (obj: any) => obj instanceof Promise;

export const render: FrameworkRenderFn = async (
  story,
  doc,
  options: any = {},
) => {
  if (!story) {
    throw new Error(`Invalid story`);
  }
  if (!doc) {
    throw new Error(`Invalid doc`);
  }
  const controls = story.controls;
  let values = getControlValues(controls);
  //parameters added to avoid bug in SB6 rc that assumes parameters exist
  let context = { story, doc, controls, parameters: {} };

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
    if (isPromise(decorator)) {
      renderFn = await decorator(values, {
        ...context,
        renderFn: childFn,
      });
    } else {
      renderFn = () =>
        decorator(values, {
          ...context,
          renderFn: childFn,
        });
    }
  }
  let node: any = null;
  if (renderFn) {
    if (story.async || isPromise(renderFn)) {
      node = await (renderFn as any)(values, context);
    } else {
      node = () => (renderFn as any)(values, context);
    }
  }
  return createElement(node);
};
