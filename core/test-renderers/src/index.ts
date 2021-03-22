import { render as reactTestRenderer } from './renderers/react-test-renderer';
import { render as enzymeReact16Renderer } from './renderers/enzyme-react-16';
import { render as rtlRenderer } from './renderers/react-testing-library';
import { RendererFn, RendererFnResult, Json } from './types';

export { RendererFn, RendererFnResult, Json };

export const renderers: Record<string, RendererFn> = {
  react: rtlRenderer,
  rtr: reactTestRenderer,
  enzyme: enzymeReact16Renderer,
};
