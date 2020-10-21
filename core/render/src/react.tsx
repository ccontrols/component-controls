/* eslint-disable react/display-name */
import React, { createElement } from 'react';
import {
  StoryRenderFn,
  getControlValues,
  deepMerge,
  FrameworkRenderFn,
} from '@component-controls/core';
import StyleContext from 'isomorphic-style-loader/StyleContext';

export const render: FrameworkRenderFn = (story, doc, options: any = {}) => {
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
  const css = new Set();
  const insertCss = (...styles: any[]) => {
    console.log(styles);
    styles.forEach(style => css.add(style._getCss()));
  };
  node = () => (
    <StyleContext.Provider value={{ insertCss }}>
      {(renderFn as StoryRenderFn)(values, context)}
    </StyleContext.Provider>
  );
  return createElement(node);
};
