import path from 'path';
import '@testing-library/jest-dom';
import { render as rtlRender } from '@testing-library/react';
import { VariantButtonProps } from './fixtures/VariantButton';
import { renderExample } from '../src';

import doc, {
  overview,
  primary,
  disabled,
} from './fixtures/VariantButton.docs';

describe('VariantButton', () => {
  test('controls', async () => {
    const rendered = renderExample<VariantButtonProps>({
      example: overview,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const { getByTestId } = rtlRender(rendered);
    expect(getByTestId('label')).toHaveTextContent('Button');
  });

  test('controls values', async () => {
    const rendered = renderExample<VariantButtonProps>({
      example: overview,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
      controls: {
        text: 'New Text',
      },
    });

    const { getByTestId } = rtlRender(rendered);

    expect(getByTestId('label')).toHaveTextContent('New Text');
  });
  test('primary', async () => {
    const rendered = renderExample({
      example: primary,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const { asFragment, getByTestId, container } = rtlRender(rendered);

    expect(asFragment()).toMatchSnapshot();
    const label = getByTestId('label');
    expect(label).toHaveTextContent('Primary');
    //global decorator in config file
    expect(container.children[0]).toHaveStyle('background: lightblue');
  });

  test('disabled', async () => {
    const rendered = renderExample({
      example: disabled,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const { asFragment, getByRole } = rtlRender(rendered);
    expect(asFragment()).toMatchSnapshot();

    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
