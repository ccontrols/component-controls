import * as path from 'path';
import { defaultPackageOptions } from '../src/index';
import { packageInfo } from '../src/misc/package-info';

describe('package-info', () => {
  it('current folder', async () => {
    expect(
      await packageInfo('name', __dirname, defaultPackageOptions),
    ).toMatchSnapshot();
  });

  it('no package', async () => {
    expect(
      await packageInfo(
        'name',
        path.resolve(__dirname, '..', '..', '..'),
        defaultPackageOptions,
      ),
    ).toMatchSnapshot();
  });

  it('error fields', async () => {
    expect(
      await packageInfo(
        'name',
        path.resolve(__dirname, 'fixtures', 'package-info'),
        defaultPackageOptions,
      ),
    ).toMatchSnapshot();
  });
});
