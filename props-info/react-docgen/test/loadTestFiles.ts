import * as path from 'path';
import * as fs from 'fs';
import extractInfo from '../src/index';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (...args: string[]) => {
  const folderName = path.join(__dirname, 'fixtures', ...args);
  const fileNames = fs.readdirSync(folderName);
  //.filter(name => name === 'string-template.js');

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(await extractInfo(fileName)).toMatchSnapshot();
    });
  });
};
