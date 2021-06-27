import path from 'path';
import { parseFiles } from '../../../src/index';

describe('union', () => {
  it('export const', () => {
    const results = parseFiles([path.resolve(__dirname, 'export-const.ts')]);
    expect(results).toEqual({
      union: {
        description: 'strings union',
        kind: 4,
        displayName: 'union',
        properties: [
          {
            kind: 1,
            value: 'this',
          },
          {
            kind: 2,
            value: 1,
          },
          {
            kind: 3,
            value: false,
          },
          {
            kind: 10,
          },
          {
            kind: 8,
          },
        ],
      },
    });
  });
});
