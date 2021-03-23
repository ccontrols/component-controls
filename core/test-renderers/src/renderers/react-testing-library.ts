import { render as rtlRender, RenderResult } from '@testing-library/react';
import { RendererFn } from '../types';

export const render: RendererFn<RenderResult> = async (
  { story, doc, config },
  options?: any,
) => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc);
    const results = rtlRender(rendered, options);
    return {
      toJson: () => results.asFragment(),
      ...results,
    };
  }
  return undefined;
};
