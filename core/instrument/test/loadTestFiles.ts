import * as path from 'path';
import * as fs from 'fs';
import jsStringEscape from 'js-string-escape';
import {
  InstrumentOptions,
  parseStories,
  ParseStoriesReturnType,
} from '../src/index';

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
): void => {
  const folderName = path.join(__dirname, 'fixtures', ...filePaths);
  const fileNames = fs.readdirSync(folderName);
  //.filter(name => name === 'format-source.mdx');

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
  options: InstrumentOptions,
  filePaths: string[],
  include?: string[],
): void => {
  loadTestFiles(
    async fileName => {
      const content = fs.readFileSync(fileName, 'utf8');
      return await parseStories(content, fileName, options);
    },
    filePaths,
    include,
  );
};

export type TestCallback = (parsed: ParseStoriesReturnType) => void;
export const fixtureToTest = (
  filePaths: string[],
  fileName: string,
  callback: TestCallback,
  options?: InstrumentOptions,
): void => {
  const folderName = path.join(__dirname, 'fixtures', ...filePaths);
  const filePathName = path.join(folderName, fileName);
  const content = fs.readFileSync(filePathName, 'utf8');
  it(fileName, async () => {
    const parsed = await parseStories(content, filePathName, options);
    await callback(parsed);
  });
};
