import React from 'react';
import { render as renderReact } from '@component-controls/render/react';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('jazmine', () => {
  test('render small component', async () => {
    const rendered = renderReact({
      story: {
        name: 'test',
        renderFn: Test,
      },
    });
    const component = mount(rendered);

    expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    expect(
      component.find('div[data-testid="test-component"]').prop('style'),
    ).toHaveProperty('backgroundColor', 'red');
  });
});
