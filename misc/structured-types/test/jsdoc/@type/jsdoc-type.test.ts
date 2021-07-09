import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@type', () => {
  it('number', () => {
    const results = parseFiles([path.resolve(__dirname, 'number.js')]);
    expect(results).toEqual({
      bar: {
        kind: 2,
        displayName: 'bar',
        value: 1,
      },
    });
  });
  it('union', () => {
    const results = parseFiles([path.resolve(__dirname, 'union.js')]);
    expect(results).toEqual({
      foo: {
        displayName: 'foo',
        kind: 4,
        properties: [
          {
            kind: 1,
          },
          {
            kind: 16,
          },
        ],
      },
    });
  });
});
