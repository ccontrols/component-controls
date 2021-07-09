import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@fires', () => {
  it('fire-event', () => {
    const results = parseFiles([path.resolve(__dirname, 'fire-event.js')]);
    expect(results).toEqual({
      Milkshake: {
        displayName: 'Milkshake',
        kind: 15,
        properties: [
          {
            displayName: 'drink',
            kind: 11,
          },
        ],
        description: 'Drink the milkshake.',
        fires: ['Milkshake#drain'],
      },
    });
  });
});
