import * as path from 'path';
import * as fs from 'fs';
import { defaultParserOptions } from '../src/index';
import { extractExports } from '../src/babel/extract-exports';

describe('extract-exports', () => {
  const extractExportsForFile = fileName => {
    const content = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    return extractExports(content, defaultParserOptions);
  };
  it('named export', () => {
    expect(
      extractExportsForFile('./examples/named-export.js'),
    ).toMatchSnapshot();
  });
  it('named const export', () => {
    expect(
      extractExportsForFile('./examples/named-const-export.js'),
    ).toMatchSnapshot();
  });

  it('named export alias', () => {
    expect(
      extractExportsForFile('./examples/named-export-alias.js'),
    ).toMatchSnapshot();
  });

  it('re-exported name', () => {
    expect(
      extractExportsForFile('./examples/re-exported-name.js'),
    ).toMatchSnapshot();
  });
});
