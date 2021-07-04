import path from 'path';
import { parseFiles } from '../../../src/index';

describe('object', () => {
  it('initialized object', () => {
    const results = parseFiles([path.resolve(__dirname, 'initialized.ts')]);
    expect(results).toEqual({
      initializedObj: {
        kind: 0,
        properties: [
          {
            kind: 2,
            value: 12,
            displayName: 'a',
          },
          {
            kind: 1,
            value: 'test',
            displayName: 'b',
          },
        ],
        displayName: 'initializedObj',
        description: 'initialized object',
      },
    });
  });

  it('export const', () => {
    const results = parseFiles([path.resolve(__dirname, 'export-const.ts')]);
    expect(results).toEqual({
      obj: {
        kind: 0,
        value: undefined,
        displayName: 'obj',
        description: 'exported undefined object',
      },
    });
  });
});
