import path from 'path';
import { followImports, FollowImportType } from '../src';

export type ComponentCallback = (component: FollowImportType) => void;

export const followFixture = (
  fileName: string,
  callback: ComponentCallback,
): void => {
  it(fileName, () => {
    const results = followImports(
      'Button',
      path.resolve(__dirname, 'fixtures', 'follow-imports', fileName),
    );
    callback(results);
  });
};
describe('follow-imports-fixtures', () => {
  followFixture('button-default-export.js', imports => {
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });

  followFixture('button-from-node-nodules.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'PropsTable',
      from: '@component-controls/storybook',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe(
      '../../../node_modules/@component-controls/storybook/dist/index.js',
    );
  });

  followFixture('button-named-export.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('cjs-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      importedName: 'Button',
      from: './cjs-named-export',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/cjs-named-export.js');
  });

  followFixture('direct-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/direct-import.js');
  });

  followFixture('export-all.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('import-node-modules.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'PropsTable',
      from: './button-from-node-nodules',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe(
      '../../../node_modules/@component-controls/storybook/dist/index.js',
    );
  });

  followFixture('index.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      from: './button-named-export',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-default-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'default',
      importedName: 'default',
      from: './button-default-export',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });

  followFixture('one-level-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      from: './button-named-export',
      source: 'export const Button = () => {};\n',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-index-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      from: './',
      source: 'export const Button = () => {};\n',
      importedName: 'Button',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-namespace-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'default',
      importedName: 'namespace',
      source: 'export default () => {};\n',
      from: './button-default-export',
    });
    const file = path.relative(__dirname, imports.filePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });
});
