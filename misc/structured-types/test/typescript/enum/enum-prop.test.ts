import path from 'path';
import { parseFiles } from '../../../src/index';

describe('enum', () => {
  it('string enum', () => {
    const results = parseFiles([path.resolve(__dirname, 'string-enum.ts')]);
    expect(results).toEqual({
      StringEnums: {
        displayName: 'StringEnums',
        kind: 5,
        properties: [
          {
            displayName: 'Up',
            kind: 1,
            value: 'UP',
          },
          {
            displayName: 'Down',
            kind: 1,
            value: 'DOWN',
          },
          {
            displayName: 'Left',
            kind: 1,
            value: 'LEFT',
          },
          {
            displayName: 'Right',
            kind: 1,
            value: 'RIGHT',
            description: 'right enum property',
          },
        ],
        description: 'string values enum',
      },
    });
  });
  it('initialized enum', () => {
    const results = parseFiles([path.resolve(__dirname, 'initialized.ts')]);
    expect(results).toEqual({
      InitializedEnum: {
        description: 'this is an enum with an initialized element',
        kind: 5,
        displayName: 'InitializedEnum',
        properties: [
          {
            description: 'enum starts at 1',
            displayName: 'Up',
            kind: 2,
            value: 1,
          },
          {
            description: 'second element',
            displayName: 'Down',
          },
          {
            displayName: 'Left',
          },
          {
            displayName: 'Right',
          },
        ],
      },
    });
  });
});
