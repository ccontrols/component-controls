import path from 'path';
import { extractProps, extractReact } from '../src/index';

it('class-interface-props', () => {
  const props = extractProps(
    ['Column'],
    [path.resolve(__dirname, './fixtures/class-interface-props.tsx')],
    extractReact,
  );
  expect(props).toEqual({
    Column: {
      description: 'Column description',
      name: 'Column',
      type: 'class',
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
});
