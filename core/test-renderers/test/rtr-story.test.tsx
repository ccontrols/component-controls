import path from 'path';
import { renderExample } from '../src';
import { VariantButtonProps } from './fixtures/VariantButton';
import doc, {
  overview,
  primary,
  disabled,
} from './fixtures/VariantButton.docs';

describe('VariantButton', () => {
  test('controls', async () => {
    const { root } = await renderExample<VariantButtonProps>({
      example: overview,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
      renderer: 'rtr',
    });
    expect(root.findByProps({ 'data-testid': 'label' }).children).toEqual([
      'Button',
    ]);
  });
  test('controls values', async () => {
    const { root } = await renderExample<VariantButtonProps>({
      example: overview,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
      renderer: 'rtr',
      controls: {
        text: 'New Text',
      },
    });
    expect(root.findByProps({ 'data-testid': 'label' }).children).toEqual([
      'New Text',
    ]);
  });
  test('primary', async () => {
    const { toJson, root } = await renderExample({
      example: primary,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
      renderer: 'rtr',
    });

    expect(toJson()).toMatchSnapshot();

    const label = root.findByProps({ 'data-testid': 'label' });
    expect(label.children).toEqual(['Primary']);

    //global decorator in config file
    const style = root.findByType('div').props.style;
    expect(style).toHaveProperty('background', 'lightblue');
  });

  test('disabled', async () => {
    const { toJson, root } = await renderExample({
      example: disabled,
      doc,
      projectFolder: path.join(__dirname, 'fixtures'),
      renderer: 'rtr',
    });
    expect(toJson()).toMatchSnapshot();

    expect(root.findByType('button').props.disabled).toBe(true);
  });
});
