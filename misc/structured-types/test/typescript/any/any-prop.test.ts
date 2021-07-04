import path from 'path';
import { parseFiles } from '../../../src/index';

describe('any', () => {
  it('export const', () => {
    const results = parseFiles([path.resolve(__dirname, 'export-const.ts')]);
    expect(results).toEqual({
      a: {
        kind: 17,
        description: 'this is any type',
        value: 'as',
        displayName: 'a',
      },
    });
  });
});
