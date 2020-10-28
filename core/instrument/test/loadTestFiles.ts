import * as path from 'path';
import * as fs from 'fs';
import jsStringEscape from 'js-string-escape';
import { InstrumentOptions, parseStories } from '../src/index';
import { getComponentProps } from '../src/misc/props-info';

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

export const extractComponentProps = (
  componentName: string,
  fileName: string,
): void => {
  it(componentName, async () => {
    expect(
      await getComponentProps(
        [
          {
            name: '@component-controls/react-docgen-info',
            test: /\.(js|jsx)$/,
          },
          {
            name: '@component-controls/react-docgen-typescript-info',
            test: /\.(ts|tsx)$/,
          },
        ],
        fileName,
        componentName,
      ),
    ).toMatchSnapshot();
  });
};
