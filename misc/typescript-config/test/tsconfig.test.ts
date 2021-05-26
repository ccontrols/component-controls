import path from 'path';
import { getTypescriptConfig } from '../src';

describe('tsconfig', () => {
  it('no defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/tsconfig/tsfile.ts'),
    );
    expect(config).toEqual({
      module: 3,
    });
  });
  it('with defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/tsconfig/tsfile.ts'),
      {
        allowUmdGlobalAccess: false,
      },
    );
    expect(config).toEqual({
      module: 3,
      allowUmdGlobalAccess: false,
    });
  });
});
