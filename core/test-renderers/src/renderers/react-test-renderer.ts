import renderer, { ReactTestRenderer, act } from 'react-test-renderer';
import { Await } from '@component-controls/core';
import { RendererFn, Json } from '../types';

export const render: RendererFn<renderer.ReactTestRenderer> = async (
  { story, doc, config },
  options,
) => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc);
    let component: ReactTestRenderer | undefined;
    act(() => {
      component = renderer.create(rendered, options) as ReactTestRenderer;
    });
    if (component) {
      return {
        toJson: () => (component as ReactTestRenderer).toJSON() as Json,
        ...component,
      };
    }
  }
  return {
    toJson: () => null,
  } as Await<ReturnType<typeof render>>;
};
