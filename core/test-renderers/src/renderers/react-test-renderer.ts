import renderer from 'react-test-renderer';
import { RendererFn, RendererFnResult, Json } from '../types';

export const render: RendererFn = async (
  { story, doc, config },
  options,
): Promise<(RendererFnResult & renderer.ReactTestRenderer) | undefined> => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc, config);
    const component = renderer.create(rendered, options);
    return { toJson: () => component.toJSON() as Json, ...component };
  }
  return undefined;
};
