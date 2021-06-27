import path from 'path';
import { parseFiles } from '../../../src/index';
describe('unknown', () => {
  it('export const', () => {
    const results = parseFiles([path.resolve(__dirname, 'export-const.ts')]);
    expect(results).toEqual({
      a: {
        kind: 9,
        value: undefined,
        description: 'named export unknown type',
        displayName: 'a',
      },
    });
  });
});
