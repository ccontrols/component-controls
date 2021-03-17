import path from 'path';
import {
  defaultParserOptions,
  defaultResolveOptions,
  defaultComponentOptions,
} from '../src/index';
import { followImports, FollowImportType } from '../src/babel/follow-imports';

export type ComponentCallback = (component: FollowImportType) => void;

export const followFixture = (
  fileName: string,
  callback: ComponentCallback,
): void => {
  const filePathName = path.resolve(
    __dirname,
    'fixtures',
    'follow-imports',
    fileName,
  );
  it(fileName, async () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { node, path, ...component } = await followImports(
      'Button',
      filePathName,
      undefined,
      {
        parser: defaultParserOptions,
        resolver: defaultResolveOptions,
        components: defaultComponentOptions,
      },
    );
    await callback(component);
  });
};
describe('follow-imports-fixtures', () => {
  followFixture('button-default-export.js', imports => {
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });

  followFixture('button-from-node-nodules.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'PropsTable',
      from: '@component-controls/storybook',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe(
      '../../../node_modules/@component-controls/storybook/dist/index.js',
    );
  });

  followFixture('button-named-export.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('cjs-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      importedName: 'Button',
      from: '../exports/cjs-named-export',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/exports/cjs-named-export.js');
  });

  followFixture('direct-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/direct-import.js');
  });

  followFixture('export-all.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('import-node-modules.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'PropsTable',
      from: './button-from-node-nodules',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe(
      '../../../node_modules/@component-controls/storybook/dist/index.js',
    );
  });

  followFixture('index.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      source: 'export const Button = () => {};\n',
      from: './button-named-export',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-default-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'default',
      source: 'export default () => {};\n',
      importedName: 'default',
      from: './button-default-export',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });

  followFixture('one-level-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      source: 'export const Button = () => {};\n',
      from: './button-named-export',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-index-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'Button',
      source: 'export const Button = () => {};\n',
      from: './',
      importedName: 'Button',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-named-export.js');
  });

  followFixture('one-level-namespace-import.js', imports => {
    expect(imports).toMatchObject({
      exportedAs: 'default',
      source: 'export default () => {};\n',
      importedName: 'namespace',
      from: './button-default-export',
    });
    const file = path.relative(__dirname, imports.originalFilePath);
    expect(file).toBe('fixtures/follow-imports/button-default-export.js');
  });
});
