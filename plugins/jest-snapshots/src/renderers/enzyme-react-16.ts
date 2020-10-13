import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

import { Store } from '@component-controls/core';
import { RendererFn } from '../index';

configure({ adapter: new Adapter() });

export const render: RendererFn = async (
  storyId: string,
  store: Store,
  options?: any,
) => {
  const renderFn = store.config.renderFn;
  if (renderFn) {
    const story = store.stories[storyId];
    const doc = story?.doc ? store.docs[story?.doc] : undefined;
    const rendered = await renderFn(story, doc, options);
    const component = mount(rendered);
    return toJson(component, { mode: 'deep' });
  }
  return undefined;
};
