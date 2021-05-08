import React from 'react';
import { screen } from '@testing-library/react';
import { render as rtlRender } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render as renderReact } from '@component-controls/render/react';

const Test = () => (
  <div data-testid="test-component" style={{ backgroundColor: 'red' }}>
    jazmine
  </div>
);
describe('rtl', () => {
  test('render small component', async () => {
    const rendered = renderReact({
      story: {
        name: 'test',
        renderFn: Test,
      },
    });
    const { asFragment, getByTestId } = rtlRender(rendered);
    expect(asFragment()).toMatchSnapshot();

    expect(getByTestId('test-component')).toHaveStyle('background-color: red');
    expect(screen.getByTestId('test-component')).toHaveStyle(
      'background-color: red',
    );
  });
});
