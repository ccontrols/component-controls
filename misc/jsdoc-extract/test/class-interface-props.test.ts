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
      kind: 13,
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
});
