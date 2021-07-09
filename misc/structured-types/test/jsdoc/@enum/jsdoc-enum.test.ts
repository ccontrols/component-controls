import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@enum', () => {
  it('numeric-enum', () => {
    const results = parseFiles([path.resolve(__dirname, 'numeric-enum.js')]);
    expect(results).toEqual({
      triState: {
        displayName: 'triState',
        kind: 5,
        properties: [
          {
            kind: 2,
            displayName: 'TRUE',
            value: 1,
            description: 'The true value',
          },
          {
            kind: 2,
            displayName: 'FALSE',
            value: -1,
          },
          {
            kind: 3,
            displayName: 'MAYBE',
            value: true,
          },
        ],
        description: 'Enum for tri-state values.',
        readonly: true,
      },
    });
  });
});
