import * as path from 'path';
import { PackageInfo } from '@component-controls/core';
import { defaultPackageOptions } from '../src/index';
import { packageInfo } from '../src/misc/package-info';

export type TestCallback = (parsed: PackageInfo) => void;
export const packageFixture = (
  name: string,
  filePaths: string[],
  testName: string,
  callback: TestCallback,
): void => {
  const folderName = path.join(__dirname, ...filePaths);
  it(testName, async () => {
    const parsed = await packageInfo(name, folderName, defaultPackageOptions);
    await callback(parsed);
  });
};

describe('package-info', () => {
  packageFixture('name', [], 'package-info', packageInfo => {
    expect(packageInfo).toMatchObject({
      name: '@component-controls/instrument',
      repository: {
        browse:
          'https://github.com/ccontrols/component-controls/tree/master/core/instrument/test',
        docs:
          'https://github.com/ccontrols/component-controls/tree/master#readme',
        issues: 'https://github.com/ccontrols/component-controls/issues',
      },
    });
  });

  packageFixture('name', ['..', '..', '..'], 'no package', packageInfo => {
    expect(packageInfo).toMatchObject({
      repository: {
        browse: 'https://github.com/ccontrols/component-controls/tree/master/',
        docs:
          'https://github.com/ccontrols/component-controls/tree/master#readme',
        issues: 'https://github.com/ccontrols/component-controls/issues',
      },
    });
  });

  packageFixture(
    'name',
    ['fixtures', 'package-info'],
    'error fields',
    packageInfo => {
      expect(packageInfo).toMatchObject({
        name: 'my-gatsby-project',
        version: '1.0.0',
        dependencies: {
          '@component-controls/gatsby-theme-stories': '^1.5.6',
          gatsby: '^2.23.11',
          react: '^17.0.1',
          'react-dom': '^17.0.1',
        },
      });
    },
  );
});
