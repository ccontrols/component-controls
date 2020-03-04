import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { followImports } from '../src/babel/follow-imports';

describe('follow-imports', () => {
  const extractFollowImportsForFile = (importName, fileName) => {
    return followImports(
      importName,
      require.resolve(fileName),
      defaultParserOptions,
      defaultResolveOptions,
    );
  };
  it('simple import', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/direct-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('one level import', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/one-level-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('one level default import', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/one-level-default-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('one level namespace import', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/one-level-namespace-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('one level index import', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/one-level-index-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('export all', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/export-all.js',
      ),
    ).toMatchSnapshot();
  });
  it('cjs named export', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/cjs-import.js',
      ),
    ).toMatchSnapshot();
  });
  it('export node modules', () => {
    expect(
      extractFollowImportsForFile(
        'Button',
        './examples/follow-imports/button-from-node-nodules.js',
      ),
    ).toMatchSnapshot();
  });
});
