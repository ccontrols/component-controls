import path from 'path';
import { followImports } from '../src';

describe('react-types', () => {
  it('react.d.ts types', () => {
    const findImported = followImports(
      'FC',
      path.resolve(__dirname, '../../../node_modules/@types/react/index.d.ts'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'FC',
      internalName: 'FC',
      source: 'type FC<P = {}> = FunctionComponent<P>;',
    });
    expect(path.relative(__dirname, findImported?.filePath || '')).toBe(
      '../../../node_modules/@types/react/index.d.ts',
    );
  });
  it('imported types', () => {
    const findImported = followImports(
      'FC',
      path.resolve(__dirname, './fixtures/react-types.tsx'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'FC',
      internalName: 'FC',
      importedName: 'FC',
      from: 'react',
      source: 'type FC<P = {}> = FunctionComponent<P>;',
    });
    expect(path.relative(__dirname, findImported?.filePath || '')).toBe(
      '../../../node_modules/@types/react/index.d.ts',
    );
  });
});
