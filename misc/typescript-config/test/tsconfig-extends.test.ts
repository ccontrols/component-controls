import path from 'path';
import { getTypescriptConfig } from '../src';

describe('tsconfig-extends', () => {
  it('no defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/tsconfig-extends/tsfile.ts'),
    );
    expect(config).toEqual({
      module: 3,
      allowJs: false,
    });
  });
  it('with defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/tsconfig-extends/tsfile.ts'),
      {
        allowUmdGlobalAccess: false,
      },
    );
    expect(config).toEqual({
      module: 3,
      allowJs: false,
      allowUmdGlobalAccess: false,
    });
  });
});
