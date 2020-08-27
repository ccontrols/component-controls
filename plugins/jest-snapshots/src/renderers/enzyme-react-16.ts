import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

configure({ adapter: new Adapter() });

export const render: RendererFn = (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    const component = mount(renderFn(storyId, store, options));
    return toJson(component, { mode: 'deep' });
  }
  return undefined;
};
