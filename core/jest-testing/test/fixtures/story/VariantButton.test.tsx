import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { primary as Primary, disabled as Disabled } from './VariantButton.docs';

describe('VariantButton', () => {
  test('primary', async () => {
    const { getByText, asFragment, getByRole } = render(<Primary />);
    fireEvent.click(getByText('Primary'));
    expect(asFragment()).toMatchInlineSnapshot(`
<DocumentFragment>
  <button
    style="color: rgb(242, 242, 242); background-color: rgb(47, 128, 237); font-size: 18px; padding: 10px 20px; border-radius: 8px; border: 1px solid #000000; display: flex; flex-direction: row; align-items: center;"
  >
    <div
      role="label"
      style="padding: 0px 10px;"
    >
      Primary
    </div>
  </button>
</DocumentFragment>
`);
    expect(getByRole('label')).toHaveTextContent('Primary');
  });

  test('disabled', async () => {
    const { asFragment, getByRole } = render(<Disabled />);
    expect(asFragment()).toMatchInlineSnapshot(`
  <DocumentFragment>
    <button
      disabled=""
      style="color: rgb(130, 130, 130); background-color: rgb(224, 224, 224); font-size: 18px; padding: 10px 20px; border-radius: 8px; border: 1px solid #000000; display: flex; flex-direction: row; align-items: center;"
    >
      <div
        role="label"
        style="padding: 0px 10px;"
      >
        Disabled
      </div>
    </button>
  </DocumentFragment>
  `);
    expect(getByRole('label')).toHaveTextContent('Disabled');
    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
