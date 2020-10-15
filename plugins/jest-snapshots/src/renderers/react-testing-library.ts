import { render as rtlRender } from '@testing-library/react';

import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

export const render: RendererFn = async (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    const story = store.stories[storyId];
    const doc = story?.doc ? store.docs[story?.doc] : undefined;

    const rendered = renderFn(story, doc, options);
    const { asFragment } = rtlRender(rendered);
    return asFragment();
  }
  return undefined;
};
