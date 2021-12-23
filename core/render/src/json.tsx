import { StoryRenderFn, FrameworkRenderFn } from '@component-controls/core';
import { composeFn } from './compose';

export const render: FrameworkRenderFn = props => {
  const { renderFn, values, context } = composeFn(props);
  const result =
    typeof renderFn === 'function'
      ? (renderFn as StoryRenderFn)(values, context)
      : 'invalid function';
  return JSON.stringify(result, null, 2);
};
