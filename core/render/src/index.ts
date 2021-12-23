import { FrameworkRenderFn } from '@component-controls/core';
import { render as renderReact } from './react';
import { render as renderJSON } from './json';

//noop
export const renderers: Record<string, FrameworkRenderFn> = {
  react: renderReact,
  json: renderJSON,
};
