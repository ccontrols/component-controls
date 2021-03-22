import React from 'react';
import { render as renderReact } from '@component-controls/render/react';
import { render } from '../src/renderers/enzyme-react-16';

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('jazmine', () => {
  test('render small component', async () => {
    const { toJson, component } =
      (await render({
        story: {
          name: 'test',
          renderFn: Test,
        },
        doc: {
          title: 'test',
        },
        config: {
          renderFn: renderReact,
        },
      })) || {};
    expect(toJson ? toJson() : undefined).toMatchSnapshot();
    if (component) {
      expect(
        component.find('div[data-testid="test-component"]').prop('style'),
      ).toHaveProperty('backgroundColor', 'red');
    }
  });
});
