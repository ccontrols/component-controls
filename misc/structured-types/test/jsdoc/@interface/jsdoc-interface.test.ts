import path from 'path';
import { parseFiles } from '../../../src/index';

describe('@interface', () => {
  it('interface declaration', () => {
    const results = parseFiles([path.resolve(__dirname, 'interface.js')]);
    expect(results).toEqual({
      Color: {
        displayName: 'Color',
        kind: 14,
        description: 'Interface for classes that represent a color.',
      },
    });
  });
});
