import path from 'path';
import { renderExample } from '../src';
import { VariantButtonProps } from './fixtures/VariantButton';

import doc, {
  primary,
  disabled,
  overview,
} from './fixtures/VariantButton.docs';

describe('VariantButton', () => {
  test('controls', async () => {
    const { component } =
      (await renderExample<VariantButtonProps>({
        example: overview,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'enzyme',
      })) || {};
    expect(
      component ? component.find('div[data-testid="label"]').text() : '',
    ).toBe('Button');
  });
  test('primary', async () => {
    const { toJson, component } =
      (await renderExample({
        example: primary,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'enzyme',
      })) || {};

    expect(toJson ? toJson() : undefined).toMatchSnapshot();
    if (component) {
      const label = component.find('div[data-testid="label"]');
      expect(label.text()).toBe('Primary');

      //global decorator in config file
      expect(
        component
          .find('div')
          .at(0)
          .prop('style'),
      ).toHaveProperty('background', 'lightblue');
    }
  });
  test('disabled', async () => {
    const { toJson, component } =
      (await renderExample({
        example: disabled,
        doc,
        projectFolder: path.join(__dirname, 'fixtures'),
        renderer: 'enzyme',
      })) || {};
    expect(toJson ? toJson() : undefined).toMatchSnapshot();
    if (component) {
      const disabled = component.find('button').prop('disabled');
      expect(disabled).toBe(true);
    }
  });
});
