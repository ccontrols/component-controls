import path from 'path';
import { followImports } from '../src';

describe('reverse-variable', () => {
  it('default export', () => {
    const findImported = followImports(
      'default',
      path.resolve(__dirname, './fixtures/reverse-variable.js'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'default',
      internalName: 'CProps',
      source: "'hello'",
    });
    expect(path.relative(__dirname, findImported?.filePath || '')).toBe(
      'fixtures/reverse-variable.js',
    );
  });
  it('named export', () => {
    const findImported = followImports(
      'CProps',
      path.resolve(__dirname, './fixtures/reverse-variable.js'),
    );
    expect(findImported).toMatchObject({
      exportedAs: 'CProps',
      internalName: 'CProps',
      source: "'hello'",
    });
    expect(path.relative(__dirname, findImported?.filePath || '')).toBe(
      'fixtures/reverse-variable.js',
    );
  });
});
