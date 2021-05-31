import path from 'path';
import { run } from '../src/index';

it('tsdoc-function', () => {
  const result = run(path.resolve(__dirname, './fixtures/tsdoc-function.ts'));
  expect(result).toMatchObject({
    sum: {
      parameters: [
        {
          name: 'a',
          type: 'number',
          description: 'first parameter to add',
        },
        {
          name: 'b',
          type: 'number',
          value: 1,
          description: 'second parameter to add',
        },
      ],
      returns: {
        description: 'the sum of the two parameters',
        properties: [
          {
            type: 'number',
            name: 'a',
          },
          {
            type: 'number',
            name: 'b',
          },
          {
            type: 'number',
            name: 'result',
          },
        ],
      },
      examples: [
        {
          content:
            "```ts\nimport { sum } from '@component-controls/jsdoc-extract';\n\nexpect(sum(1, 2)).toMatchObject({ a: 1, b: 2, result: 3});\n```",
        },
      ],

      description: 'sum api function',
    },
  });
});
