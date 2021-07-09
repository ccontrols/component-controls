import path from 'path';
import { parseFiles } from '../../../src/index';

describe('function', () => {
  it('return promise', () => {
    const results = parseFiles([path.resolve(__dirname, 'return-promise.js')]);
    expect(results).toEqual({
      sumAsync: {
        displayName: 'sumAsync',
        kind: 11,
        parameters: [
          {
            kind: 2,
            displayName: 'a',
          },
          {
            kind: 2,
            displayName: 'b',
          },
        ],
        returns: {
          description: 'Promise object represents the sum of a and b',
          kind: 15,
          type: 'Promise',
        },
        description: 'Returns the sum of a and b',
      },
    });
  });
  it('multiple types', () => {
    const results = parseFiles([path.resolve(__dirname, 'multiple-types.js')]);
    expect(results).toEqual({
      sum: {
        displayName: 'sum',
        kind: 11,
        parameters: [
          {
            kind: 2,
            displayName: 'a',
          },
          {
            kind: 2,
            displayName: 'b',
          },
          {
            kind: 3,
            displayName: 'retArr',
            description: 'If set to true, the function will return an array',
          },
        ],
        returns: {
          description:
            'Sum of a and b or an array that contains a, b and the sum of a and b.',
          kind: 4,
          properties: [
            {
              kind: 2,
            },
            {
              kind: 16,
            },
          ],
        },
        description: 'Returns the sum of a and b',
      },
    });
  });
  it('return description', () => {
    const results = parseFiles([
      path.resolve(__dirname, 'return-description.js'),
    ]);
    expect(results).toEqual({
      sum: {
        displayName: 'sum',
        kind: 11,
        parameters: [
          {
            kind: 2,
            displayName: 'a',
          },
          {
            kind: 2,
            displayName: 'b',
          },
        ],
        returns: {
          description: 'Sum of a and b',
          kind: 2,
        },
        description: 'Returns the sum of a and b',
      },
    });
  });
  it('return type', () => {
    const results = parseFiles([path.resolve(__dirname, 'return-type.js')]);
    expect(results).toEqual({
      sum: {
        displayName: 'sum',
        kind: 11,
        parameters: [
          {
            kind: 2,
            displayName: 'a',
          },
          {
            kind: 2,
            displayName: 'b',
          },
        ],
        returns: {
          kind: 2,
        },
        description: 'Returns the sum of a and b',
      },
    });
  });
  it('tags', () => {
    const results = parseFiles([path.resolve(__dirname, 'tags-function.js')]);
    expect(results).toEqual({
      sum: {
        displayName: 'sum',
        kind: 11,
        parameters: [
          {
            kind: 2,
            displayName: 'a',
            description: 'first parameter to add',
          },
          {
            kind: 2,
            displayName: 'b',
            value: 1,
            description: 'second parameter to add',
          },
        ],
        examples: [
          {
            content:
              "```js\nimport { sum } from './sum';\n\nexpect(sum(1, 2)).toMatchObject({ a: 1, b: 2, result: 3});\n```",
          },
        ],
        returns: {
          description: 'the sum of the two parameters',
          kind: 2,
        },
        tags: [
          {
            tag: 'remarks',
            content:
              'Unlike the summary, the remarks block may contain lengthy documentation content.\nThe remarks should not restate information from the summary, since the summary section\nwill always be displayed wherever the remarks section appears.  Other sections\n(e.g. an `@example` block) will be shown after the remarks section.',
          },
        ],
        description: 'sum api function',
      },
    });
  });
});
