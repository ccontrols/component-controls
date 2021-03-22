import { render as rtlRender, RenderResult } from '@testing-library/react';
import { RendererFn, RendererFnResult } from '../types';

export const render: RendererFn = async (
  { story, doc, config },
  options?: any,
): Promise<(RendererFnResult & RenderResult) | undefined> => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc, config);
    const results = rtlRender(rendered, options);
    return {
      toJson: () => results.asFragment(),
      ...results,
    };
  }
  return undefined;
};
