import path from 'path';
import { extractProps, extractReact } from '../src/index';

it('import-props', () => {
  const props = extractProps(
    ['Column'],
    [path.resolve(__dirname, './fixtures/import-props.tsx')],
    extractReact,
  );
  expect(props).toMatchObject({
    ColumnProps: {
      name: 'ColumnProps',
      type: 'type',
      returns: {
        type: 'type',
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
    },
    DivProps: {
      name: 'DivProps',
      type: 'type',
      returns: {
        type: 'type',
        properties: [
          {
            type: 'reference',
            value: 'ColumnProps',
          },
          {
            type: 'reference',
            value: 'BaseHTMLAttributes',
            parameters: [
              {
                type: 'reference',
                value: 'HTMLDivElement',
              },
            ],
          },
        ],
      },
    },
    Column: {
      name: 'Column',
      type: 'reference',
      value: 'FC.props => <div {...props} />',
      parameters: [
        {
          type: 'reference',
          value: 'ColumnProps',
        },
      ],
    },
  });
});
