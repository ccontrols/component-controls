import renderer from 'react-test-renderer';
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
    const rendered = await renderFn(story, doc, options);
    const component = renderer.create(rendered);
    return component.toJSON();
  }
  return undefined;
};
