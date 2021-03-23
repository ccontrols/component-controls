import { mount, configure, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Await } from '@component-controls/core';
import { RendererFn } from '../types';

configure({ adapter: new Adapter() });

export const render: RendererFn<{
  component: ReactWrapper<
    any,
    Readonly<unknown>,
    React.Component<unknown, unknown, any>
  >;
}> = async ({ story, doc, config }, options?: any) => {
  const renderFn = config.renderFn;
  if (renderFn) {
    const rendered = renderFn(story, doc);
    const component = mount(rendered, options);
    return {
      toJson: () => toJson(component, { mode: 'deep' }),
      component,
    };
  }
  return {
    toJson: () => null,
  } as Await<ReturnType<typeof render>>;
};
