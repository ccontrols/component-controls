import renderer from 'react-test-renderer';
import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

export const render: RendererFn = (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    const component = renderer.create(renderFn(storyId, store, options));
    return component.toJSON();
  }
  return undefined;
};
