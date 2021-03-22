import React from 'react';
import { screen } from '@testing-library/react';
import { render as renderReact } from '@component-controls/render/react';
import { render } from '../src/renderers/react-testing-library';

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('rtl', () => {
  test('render small component', async () => {
    const { toJson, getByTestId } =
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
    if (getByTestId) {
      expect(getByTestId('test-component')).toHaveStyle(
        'background-color: red',
      );
    }
    expect(screen.getByTestId('test-component')).toHaveStyle(
      'background-color: red',
    );
  });
});
