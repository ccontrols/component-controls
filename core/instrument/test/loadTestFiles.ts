import * as path from 'path';
import * as fs from 'fs';
import jsStringEscape from 'js-string-escape';
import { parseStories } from '../src/index';

expect.addSnapshotSerializer({
  test: val => typeof val === 'object' && val instanceof String,
  print: val => {
    return `"${jsStringEscape(val.toString())}"`;
  },
});

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (
  callback: LoadTestCallbackFn,
  filePaths: string[],
  include?: string[],
) => {
  const folderName = path.join(__dirname, 'fixtures', ...filePaths);
  const fileNames = fs.readdirSync(folderName);
  //.filter(name => name === 'string-template.js');

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames
    .filter(
      fName => !include || include.length === 0 || include.indexOf(fName) > -1,
    )
    .forEach(file => {
      const fileName = path.join(folderName, file);
      it(file, async () => {
        expect(await callback(fileName)).toMatchSnapshot();
      });
    });
};

export const loadStoriesTests = (
  options,
  filePaths: string[],
  include?: string[],
) => {
  loadTestFiles(
    async fileName => {
      const content = fs.readFileSync(fileName, 'utf8');
      return await parseStories(content, fileName, options);
    },
    filePaths,
    include,
  );
};
