import * as path from 'path';
import * as fs from 'fs';
import { parseStories } from '../src/index';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (callback: LoadTestCallbackFn, ...args) => {
  const folderName = path.join(__dirname, 'examples', ...args);
  const fileNames = fs.readdirSync(folderName);
  //.filter(name => name === 'string-template.js');

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(await callback(fileName)).toMatchSnapshot();
    });
  });
};

export const loadStoriesTests = (...args) => {
  loadTestFiles(async fileName => {
    const content = fs.readFileSync(fileName, 'utf8');
    return await parseStories(content, fileName);
  }, ...args);
};
