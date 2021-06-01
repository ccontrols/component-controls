import path from 'path';
import { extractProps, extractReact } from '../src/index';

it('class-interface-props', () => {
  const props = extractProps(
    ['Column'],
    [path.resolve(__dirname, './fixtures/class-interface-props.tsx')],
    extractReact,
  );
  expect(props).toMatchObject({
    ColumnProps: {
      properties: [
        {
          type: 'string',
          description: 'stringProp description ',
          name: 'stringProp',
          optional: true,
        },
        {
          type: 'number',
          description: 'numberProp description ',
          name: 'numberProp',
        },
        {
          type: 'function',
          description: 'function props description',
          name: 'fnProp',
          parameters: [],
          returns: {
            type: 'void',
          },
        },
        {
          type: 'union',
          deprecated: 'since version 1.0',
          description: 'unionProp description',
          name: 'unionProp',
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
    Column: {
      type: 'class',
      description: 'Column description',
      parameters: [
        {
          type: 'ColumnProps',
        },
        {
          type: 'Record',
          parameters: [
            {
              type: 'string',
            },
            {
              type: 'unknown',
            },
          ],
        },
      ],
    },
  });
});
