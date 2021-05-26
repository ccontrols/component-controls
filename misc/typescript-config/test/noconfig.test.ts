import path from 'path';
import { getTypescriptConfig } from '../src';

describe('noconfig', () => {
  it('no defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/noconfig/tsfile.ts'),
    );
    expect(config).toMatchObject({
      module: 4,
    });
  });
  it('with defaults', () => {
    const config = getTypescriptConfig(
      path.resolve(__dirname, './fixtures/noconfig/tsfile.ts'),
      {
        allowUmdGlobalAccess: false,
      },
    );
    expect(config).toMatchObject({
      allowUmdGlobalAccess: false,
    });
  });
});
