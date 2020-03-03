import * as path from 'path';
import * as fs from 'fs';
import { defaultParserOptions } from '../src/index';
import { extractImports } from '../src/babel/extract-imports';

describe('extract-imports', () => {
  const extractImportsForFile = fileName => {
    const content = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    return extractImports(content, defaultParserOptions);
  };
  it('default import', () => {
    expect(
      extractImportsForFile('./examples/imports/default-import.js'),
    ).toMatchSnapshot();
  });

  it('namespace import', () => {
    expect(
      extractImportsForFile('./examples/imports/namespace-import.js'),
    ).toMatchSnapshot();
  });
  it('named import', () => {
    expect(
      extractImportsForFile('./examples/imports/named-import.js'),
    ).toMatchSnapshot();
  });

  it('named alias import', () => {
    expect(
      extractImportsForFile('./examples/imports/named-alias-import.js'),
    ).toMatchSnapshot();
  });

  it('mixed import', () => {
    expect(
      extractImportsForFile('./examples/imports/mixed-import.js'),
    ).toMatchSnapshot();
  });
  it('all imports', () => {
    expect(
      extractImportsForFile('./examples/imports/all-imports.js'),
    ).toMatchSnapshot();
  });
});
