import * as path from 'path';
import * as fs from 'fs';
import { parseCSF, parseMDX } from '../src/index';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (callback: LoadTestCallbackFn, ...args) => {
  const folderName = path.join(__dirname, 'examples', ...args);
  const fileNames = fs.readdirSync(folderName);

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(await callback(fileName)).toMatchSnapshot();
    });
  });
};

export const loadCSFTests = (...args) => {
  loadTestFiles(async fileName => {
    const content = fs.readFileSync(fileName, 'utf8');
    return await parseCSF(content, fileName);
  }, ...args);
};

export const loadMDXTests = (...args) => {
  loadTestFiles(async fileName => {
    const content = fs.readFileSync(fileName, 'utf8');
    return await parseMDX(content, fileName);
  }, ...args);
};
