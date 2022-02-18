import * as path from 'path';
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

export type TestCallback = (parsed: ParseStoriesReturnType) => Promise<void>;
export const fixtureToTest = (
  filePaths: string[],
  fileName: string,
  callback: TestCallback,
  options?: InstrumentOptions,
): void => {
  const folderName = path.join(__dirname, 'fixtures', ...filePaths);
  const filePathName = path.join(folderName, fileName);
  it(
    fileName,
    async () => {
      const parsed = await parseStories(filePathName, {
        jest: false,
        ...options,
      });
      await callback(parsed);
    },
    50000,
  );
};
