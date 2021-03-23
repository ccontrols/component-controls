import path from 'path';
import '@testing-library/jest-dom';
import { VariantButtonProps } from './fixtures/VariantButton';
import { renderExample } from '../src';

import doc, {
  overview,
  primary,
  disabled,
} from './fixtures/VariantButton.docs';

describe('VariantButton', () => {
  test('controls', async () => {
    const { getByTestId } = await renderExample<VariantButtonProps>({
      example: overview,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
    });
    expect(getByTestId('label')).toHaveTextContent('Button');
  });

  test('controls values', async () => {
    const { getByTestId } = await renderExample<VariantButtonProps>({
      example: overview,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
      controls: {
        text: 'New Text',
      },
    });

    expect(getByTestId('label')).toHaveTextContent('New Text');
  });
  test('primary', async () => {
    const { toJson, getByTestId, container } = await renderExample({
      example: primary,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
    });

    expect(toJson()).toMatchSnapshot();
    const label = getByTestId('label');
    expect(label).toHaveTextContent('Primary');
    //global decorator in config file
    expect(container.children[0]).toHaveStyle('background: lightblue');
  });

  test('disabled', async () => {
    const { toJson, getByRole } = await renderExample({
      example: disabled,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
    });
    expect(toJson()).toMatchSnapshot();

    expect(getByRole('button')).toHaveAttribute('disabled');
  });
});
