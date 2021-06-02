import path from 'path';
import { extractProps, extractReact } from '../src/index';

const expectedProps = (name: string) => ({
  [name]: {
    name,
    type: 'function',
    properties: [
      {
        description: 'stringProp description',
        name: 'stringProp',
        optional: true,
        type: 'string',
      },
      {
        description: 'numberProp description',
        name: 'numberProp',
        type: 'number',
      },
      {
        description: 'function props description',
        name: 'fnProp',
        type: 'function',
        returns: {
          type: 'void',
        },
      },
      {
        deprecated: 'since version 1.0',
        description: 'unionProp description',
        name: 'unionProp',
        type: 'union',
        properties: [
          {
            type: 'string',
            value: 'option1',
          },
          {
            type: 'string',
            value: 'option2',
          },
          {
            type: 'string',
            value: 'option3',
          },
        ],
      },
    ],
  },
});
describe('import-props', () => {
  it('ComponentEnhancedProps', () => {
    const props = extractProps(
      ['ComponentEnhancedProps'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentEnhancedProps'));
  });

  it('ComponentUntyped', () => {
    const props = extractProps(
      ['ComponentUntyped'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentUntyped'));
  });

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
  it('ComponentFC', () => {
    const props = extractProps(
      ['ComponentFC'],
      [path.resolve(__dirname, './fixtures/import-props.tsx')],
      extractReact,
    );
    expect(props).toMatchObject(expectedProps('ComponentFC'));
  });
});
