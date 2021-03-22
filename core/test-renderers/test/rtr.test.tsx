import React from 'react';
import { render as renderReact } from '@component-controls/render/react';
import { render } from '../src/renderers/react-test-renderer';

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('rtr', () => {
  test('render small component', async () => {
    const { toJson, root } =
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
    if (root) {
      const component = root.find(
        r => r.props['data-testid'] === 'test-component',
      );
      expect(component.props['style']).toHaveProperty('backgroundColor', 'red');
    }
  });
});
