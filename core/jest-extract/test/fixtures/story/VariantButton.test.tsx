import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { primary as Primary, disabled as Disabled } from './VariantButton.docs';

describe('VariantButton', () => {
  test('primary', async () => {
    const { asFragment } = render(<Primary />);
    fireEvent.click(screen.getByText('Primary'));
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <button
    style="color: rgb(242, 242, 242); background-color: rgb(47, 128, 237); font-size: 18px; padding: 10px 20px; border-radius: 8px; border: 1px solid #000000; display: flex; flex-direction: row; align-items: center;"
  >
    <div
      data-testid="label"
      style="padding: 0px 10px;"
    >
      Primary
    </div>
  </button>
</DocumentFragment>
`);
    expect(screen.getByTestId('label')).toHaveTextContent('Primary');
  });

  test('disabled', async () => {
    render(<Disabled />);
    expect(screen.getByTestId('label')).toHaveTextContent('Disabled');
    expect(screen.getByRole('button')).toHaveStyle('background-color: #E0E0E0');
    expect(screen.getByRole('button')).toHaveAttribute('disabled');
  });
});
