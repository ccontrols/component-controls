import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { primary as Primary, disabled as Disabled } from './VariantButton.docs';

describe('VariantButton', () => {
  test('primary', async () => {
    const { getByText, asFragment, getByRole } = render(<Primary />);
    fireEvent.click(getByText('Primary'));
    expect(asFragment()).toMatchSnapshot();
    expect(getByRole('label')).toHaveTextContent('Primary');
  });

  test('disabled', async () => {
    const { asFragment, getByRole } = render(<Disabled />);
    expect(asFragment()).toMatchSnapshot();
    expect(getByRole('label')).toHaveTextContent('Disabled');
    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
