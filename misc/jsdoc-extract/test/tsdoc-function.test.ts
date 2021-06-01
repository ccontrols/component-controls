import path from 'path';
import { analyzeFiles } from '../src/index';

it('tsdoc-function', () => {
  const { structures } = analyzeFiles([
    path.resolve(__dirname, './fixtures/tsdoc-function.ts'),
  ]);
  expect(structures).toMatchObject({
    sum: {
      examples: [
        {
          content:
            "```ts\nimport { sum } from '@component-controls/jsdoc-extract';\n\nexpect(sum(1, 2)).toMatchObject({ a: 1, b: 2, result: 3});\n```",
        },
      ],
      returns: {
        description: 'the sum of the two parameters',
        type: 'type',
        properties: [
          {
            name: 'a',
            type: 'number',
          },
          {
            name: 'b',
            type: 'number',
          },
          {
            name: 'result',
            type: 'number',
          },
        ],
      },
      parameters: [
        {
          name: 'a',
          description: 'first parameter to add',
          type: 'number',
        },
        {
          name: 'b',
          description: 'second parameter to add',
          type: 'number',
          value: 1,
        },
      ],
      description: 'sum api function',
      name: 'sum',
      type: 'function',
    },
  });
});
