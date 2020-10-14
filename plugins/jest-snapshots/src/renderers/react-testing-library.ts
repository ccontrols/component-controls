import { render as rtlRender, cleanup, waitFor } from '@testing-library/react';

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
    const story = store.stories[storyId];
    const doc = story?.doc ? store.docs[story?.doc] : undefined;
    const rendered = await renderFn(story, doc, options);
    const { asFragment, getByTestId } = rtlRender(rendered);
    await waitFor(() => {
      try {
        return getByTestId('story-wrapper');
      } catch (e) {
        return true;
      }
    });
    return asFragment();
  }
  return undefined;
};
