import * as path from 'path';
import * as fs from 'fs';
import { defaultParserOptions } from '../src/index';
import { extractExports } from '../src/babel/extract-exports';

describe('extract-exports', () => {
  const extractExportsForFile = fileName => {
    const content = fs.readFileSync(path.join(__dirname, fileName), 'utf8');
    return extractExports(content, defaultParserOptions);
  };
  it('props argument', () => {
    expect(extractExportsForFile('./examples/main.js')).toMatchSnapshot();
  });
});
