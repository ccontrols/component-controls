import { mount, configure, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RendererFn, RendererFnResult } from '../types';

configure({ adapter: new Adapter() });

export const render: RendererFn = async (
  { story, doc, config },
  options?: any,
): Promise<(RendererFnResult & Partial<ReactWrapper>) | undefined> => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc, config);
    const component = mount(rendered, options);
    return {
      toJson: () => toJson(component, { mode: 'deep' }),
      ...component,
    };
  }
  return undefined;
};
