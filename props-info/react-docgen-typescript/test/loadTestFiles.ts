import * as path from 'path';
import * as fs from 'fs';
import { run } from '../src/index';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (folders: string[]): void => {
  const folderName = path.join(__dirname, 'fixtures', ...folders);
  const fileNames = fs.readdirSync(folderName);
  //.filter(name => name === 'string-template.js');

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(await run()(fileName, 'MyComponent')).toMatchSnapshot();
    });
  });
};
