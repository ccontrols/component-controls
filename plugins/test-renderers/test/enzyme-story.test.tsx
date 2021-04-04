import path from 'path';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { renderExample } from '../src';
import { VariantButtonProps } from './fixtures/VariantButton';

configure({ adapter: new Adapter() });

import doc, {
  primary,
  disabled,
  overview,
} from './fixtures/VariantButton.docs';

describe('VariantButton', () => {
  test('controls', async () => {
    const rendered = renderExample<VariantButtonProps>({
      example: overview,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const component = mount(rendered);
    expect(component.find('div[data-testid="label"]').text()).toBe('Button');
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
    const component = mount(rendered);
    expect(component.find('div[data-testid="label"]').text()).toBe('New Text');
  });
  test('primary', async () => {
    const rendered = renderExample({
      example: primary,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const component = mount(rendered);

    expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    const label = component.find('div[data-testid="label"]');
    expect(label.text()).toBe('Primary');

    //global decorator in config file
    expect(
      component
        .find('div')
        .at(0)
        .prop('style'),
    ).toHaveProperty('background', 'lightblue');
  });
  test('disabled', async () => {
    const rendered = renderExample({
      example: disabled,
      doc,
      config: path.join(__dirname, 'fixtures/.config'),
    });
    const component = mount(rendered);
    expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
    expect(component.find('button').prop('disabled')).toBe(true);
  });
});
