import path from 'path';
import { parseFiles } from '../../../src/index';

describe('number', () => {
  it('default export', () => {
    const results = parseFiles([path.resolve(__dirname, 'default-export.ts')]);
    expect(results).toEqual({
      default: {
        kind: 2,
        description: 'export default variable',
        displayName: 'mynumber',
      },
    });
  });
  it('named-export', () => {
    const results = parseFiles([path.resolve(__dirname, 'named-export.ts')]);
    expect(results).toEqual({
      num: {
        kind: 2,
        displayName: 'mynumber',
      },
    });
  });

  it('initializer', () => {
    const results = parseFiles([path.resolve(__dirname, 'initializer.ts')]);
    expect(results).toEqual({
      myNum: {
        kind: 2,
        value: 3.14,
        description: 'initialiazed number variable',
        displayName: 'myNum',
      },
    });
  });
});
