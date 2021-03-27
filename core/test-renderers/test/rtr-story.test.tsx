import path from 'path';
import renderer from 'react-test-renderer';
import { renderExample } from '../src';
import { VariantButtonProps } from './fixtures/VariantButton';
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
    const { root } = renderer.create(rendered);
    expect(root.findByProps({ 'data-testid': 'label' }).children).toEqual([
      'Button',
    ]);
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

    const { root } = renderer.create(rendered);
    expect(root.findByProps({ 'data-testid': 'label' }).children).toEqual([
      'New Text',
    ]);
  });
  test('primary', async () => {
    const rendered = renderExample({
      example: primary,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const { root, toJSON } = renderer.create(rendered);
    expect(toJSON()).toMatchSnapshot();

    const label = root.findByProps({ 'data-testid': 'label' });
    expect(label.children).toEqual(['Primary']);

    //global decorator in config file
    const style = root.findByType('div').props.style;
    expect(style).toHaveProperty('background', 'lightblue');
  });

  test('disabled', async () => {
    const rendered = renderExample({
      example: disabled,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const { toJSON, root } = renderer.create(rendered);
    expect(toJSON()).toMatchSnapshot();

    expect(root.findByType('button').props.disabled).toBe(true);
  });
});
