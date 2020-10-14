import { render as rtlRender, act } from '@testing-library/react';

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

    let asFragment: any;
    await act(async () => {
      const rendered = await renderFn(story, doc, options);
      ({ asFragment } = rtlRender(rendered));
    });
    if (asFragment) {
      return asFragment();
    }
  }
  return undefined;
};
