import path from 'path';
import { extractProps, extractReact } from '../src/index';

const expectedProps = (name: string) => ({
  [name]: {
    name,
    kind: 11,
    properties: [
      {
        description: 'stringProp description',
        name: 'stringProp',
        optional: true,
        kind: 1,
      },
      {
        description: 'numberProp description',
        name: 'numberProp',
        kind: 2,
      },
      {
        description: 'function props description',
        name: 'fnProp',
        kind: 11,
        returns: {
          kind: 12,
        },
      },
      {
        deprecated: 'since version 1.0',
        description: 'unionProp description',
        name: 'unionProp',
        kind: 4,
        properties: [
          {
            kind: 1,
            value: 'option1',
          },
          {
            kind: 1,
            value: 'option2',
          },
          {
            kind: 1,
            value: 'option3',
          },
        ],
      },
    ],
  },
});
describe('import-props', () => {
  it('ComponentReactFunctionalComponent', () => {
    const props = extractProps(
      ['ComponentReactFunctionalComponent'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(
      expectedProps('ComponentReactFunctionalComponent'),
    );
  });
  it('ComponentEnhancedProps', () => {
    const props = extractProps(
      ['ComponentEnhancedProps'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentEnhancedProps'));
  });
  it('ComponentInterfaceProps', () => {
    const props = extractProps(
      ['ComponentInterfaceProps'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentInterfaceProps'));
  });
  it('ComponentUntyped', () => {
    const props = extractProps(
      ['ComponentUntyped'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentUntyped'));
  });

  it('ComponentFC', () => {
    const props = extractProps(
      ['ComponentFC'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentFC'));
  });
});
