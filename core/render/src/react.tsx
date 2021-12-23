/* eslint-disable react/display-name */
import { createElement } from 'react';
import { StoryRenderFn, FrameworkRenderFn } from '@component-controls/core';
import { composeFn } from './compose';

export const render: FrameworkRenderFn = props => {
  const { renderFn, values, context } = composeFn(props);

  return typeof renderFn === 'function'
    ? createElement(() => (renderFn as StoryRenderFn)(values, context))
    : createElement('div', 'invalid render function');
};
