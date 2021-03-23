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
    const { root } =
      (await renderExample<VariantButtonProps>({
        example: overview,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'rtr',
      })) || {};
    expect(
      root ? root.findByProps({ 'data-testid': 'label' }).children : '',
    ).toEqual(['Button']);
  });
  test('primary', async () => {
    const { toJson, root } =
      (await renderExample({
        example: primary,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'rtr',
      })) || {};

    expect(toJson ? toJson() : undefined).toMatchSnapshot();
    if (root) {
      const label = root.findByProps({ 'data-testid': 'label' });
      expect(label.children).toEqual(['Primary']);

      //global decorator in config file
      const style = root.findByType('div').props.style;
      expect(style).toHaveProperty('background', 'lightblue');
    }
  });

  test('disabled', async () => {
    const { toJson, root } =
      (await renderExample({
        example: disabled,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'rtr',
      })) || {};
    expect(toJson ? toJson() : undefined).toMatchSnapshot();
    if (root) {
      const disabled = root.findByType('button');
      expect(disabled.props.disabled).toBe(true);
    }
  });
});
