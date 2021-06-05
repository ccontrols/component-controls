import path from 'path';
import { analyzeFiles } from '../src/index';

it('tsdoc-function', () => {
  const { structures } = analyzeFiles([
    path.resolve(__dirname, './fixtures/tsdoc-function.ts'),
  ]);
  expect(structures).toEqual({
    sum: {
      examples: [
        {
          content:
            "```ts\nimport { sum } from '@component-controls/jsdoc-extract';\n\nexpect(sum(1, 2)).toMatchObject({ a: 1, b: 2, result: 3});\n```",
        },
      ],
      returns: {
        description: 'the sum of the two parameters',
        kind: 15,
        properties: [
          {
            name: 'a',
            kind: 2,
          },
          {
            name: 'b',
            kind: 2,
          },
          {
            name: 'result',
            kind: 2,
          },
        ],
      },
      parameters: [
        {
          name: 'a',
          description: 'first parameter to add',
          kind: 2,
        },
        {
          name: 'b',
          description: 'second parameter to add',
          kind: 2,
          value: 1,
        },
      ],
      description: 'sum api function',
      name: 'sum',
      kind: 11,
    },
  });
});
