import React from 'react';
import { render as renderReact } from '@component-controls/render/react';
import renderer from 'react-test-renderer';

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('rtr', () => {
  test('render small component', async () => {
    const rendered = renderReact({
      story: {
        name: 'test',
        renderFn: Test,
      },
    });
    const { toJSON, root } = renderer.create(rendered);
    expect(toJSON()).toMatchSnapshot();

    const component = root.find(
      r => r.props['data-testid'] === 'test-component',
    );
    expect(component.props['style']).toHaveProperty('backgroundColor', 'red');
  });
});
