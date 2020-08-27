import { FrameworkRenderFn } from '@component-controls/core';
import { render as renderReact } from './react';

//noop
export const renderers: Record<string, FrameworkRenderFn> = {
  react: renderReact,
};
