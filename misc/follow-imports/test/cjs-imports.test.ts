import path from 'path';
import { followImports } from '../src';

describe('cjs-imports', () => {
  it('require named import', () => {
    const findImported = followImports(
      'Test',
      path.resolve(__dirname, './fixtures/import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'Test',
      internalName: 'Column',
      importedName: 'Test',
      from: './class-interface-props-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.jsx',
    );
  });
  it('require default import', () => {
    const findImported = followImports(
      'ColumnCJS.Column',
      path.resolve(__dirname, './fixtures/import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'default',
      internalName: 'Column',
      importedName: 'default',
      from: './class-interface-props-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.jsx',
    );
  });
  it('simple import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './class-interface-props-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });
  it('alias import', () => {
    const findImported = followImports(
      'CProps',
      path.resolve(__dirname, './fixtures/import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './class-interface-props-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });
  it('alias re-import', () => {
    const findImported = followImports(
      'CProps',
      path.resolve(__dirname, './fixtures/re-import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'CProps',
      internalName: 'ColumnProps',
      from: './import-types-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });

  it('type re-import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/re-import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      internalName: 'ColumnProps',
      from: './import-types-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });
  it('import * as', () => {
    const findImported = followImports(
      'All.CProps',
      path.resolve(__dirname, './fixtures/re-import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'namespace',
      internalName: 'ColumnProps',
      from: './import-types-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });
  it('type re-re-import', () => {
    const findImported = followImports(
      'ColumnProps',
      path.resolve(__dirname, './fixtures/re-re-import-types-cjs.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'ColumnProps',
      importedName: 'ColumnProps',
      from: './re-import-types-cjs',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props-cjs.d.ts',
    );
  });
});
