import path from 'path';
import { followImports } from '../src';

describe('module-imports', () => {
  it('simple import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './class-interface-props',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('alias import', () => {
    const findImported = followImports(
      'CProps',
      path.resolve(__dirname, './fixtures/import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './class-interface-props',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('alias re-import', () => {
    const findImported = followImports(
      'CProps',
      path.resolve(__dirname, './fixtures/re-import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'CProps',
      from: './import-types',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });

  it('type re-import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/re-import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './import-types',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('import * as', () => {
    const findImported = followImports(
      'All.CProps',
      path.resolve(__dirname, './fixtures/re-import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'namespace',
      from: './import-types',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('type re-re-import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/re-re-import-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './re-import-types',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
});
