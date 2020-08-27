import { render as rtlRender, cleanup } from '@testing-library/react';

import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

export const render: RendererFn = (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    cleanup();
    let fragment: DocumentFragment | undefined = undefined;
    const { asFragment } = rtlRender(renderFn(storyId, store, options));
    fragment = asFragment();
    return fragment;
  }
  return undefined;
};
