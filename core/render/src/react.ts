import { createElement } from 'react';
import {
  StoryRenderFn,
  getControlValues,
  deepMerge,
  Store,
  FrameworkRenderFn,
} from '@component-controls/core';

export const render: FrameworkRenderFn = (
  storyId: string,
  store: Store,
  options: any = {},
) => {
  const story = store.stories[storyId];
  if (!story) {
    throw new Error(`Invalid story id ${storyId}`);
  }
  if (!story.doc) {
    throw new Error(`Invalid doc id ${storyId}`);
  }
  const doc = store.docs[story.doc];
  const controls = story.controls;
  const values = getControlValues(controls);
  const { decorators: globalDecorators = [] } = options;
  const { decorators: storyDecorators = [] } = story;
  const decorators = deepMerge<StoryRenderFn[]>(
    globalDecorators,
    storyDecorators,
  );
  //parameters added to avoid bug in SB6 rc that assumes parameters exist
  const storyContext = { story, doc, controls, parameters: {} };
  const renderFn = decorators.reverse().reduce(
    (acc: StoryRenderFn, item: StoryRenderFn) => () =>
      item(acc, { ...storyContext, renderFn: acc }),
    //@ts-ignore
    () => story.renderFn(values, storyContext),
  );
  return createElement(renderFn);
};
