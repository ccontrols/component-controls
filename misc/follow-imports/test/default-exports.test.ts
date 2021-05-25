import path from 'path';
import { followImports } from '../src';

describe('default-exports', () => {
  it('re-export default export as named', () => {
    const findImported = followImports(
      'Colum',
      path.resolve(__dirname, './fixtures/default-import-re-export.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'default',
      internalName: 'Column',
      from: './default-import',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('re-export default export', () => {
    const findImported = followImports(
      'ReAssigned',
      path.resolve(__dirname, './fixtures/default-import-re-export.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'default',
      internalName: 'Column',
      importedName: 'ReAssigned',
      from: './default-import',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
  it('import default export', () => {
    const findImported = followImports(
      'MyColumn',
      path.resolve(__dirname, './fixtures/default-import.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'default',
      internalName: 'Column',
      importedName: 'default',
      from: './class-interface-props',
    });
    expect(path.relative(__dirname, findImported.filePath)).toBe(
      'fixtures/class-interface-props.tsx',
    );
  });
});
