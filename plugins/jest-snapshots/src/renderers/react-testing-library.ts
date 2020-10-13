import { render as rtlRender, cleanup } from '@testing-library/react';

import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

export const render: RendererFn = async (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    cleanup();
    let fragment: DocumentFragment | undefined = undefined;
    const story = store.stories[storyId];
    const doc = story?.doc ? store.docs[story?.doc] : undefined;
    const { asFragment } = rtlRender(await renderFn(story, doc, options));
    fragment = asFragment();
    return fragment;
  }
  return undefined;
};
