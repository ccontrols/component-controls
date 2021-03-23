import { mount, configure, ReactWrapper } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { RendererFn } from '../types';

configure({ adapter: new Adapter() });

export const render: RendererFn<{
  component: ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
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
  return undefined;
};
