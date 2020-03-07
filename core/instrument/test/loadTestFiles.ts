import * as path from 'path';
import * as fs from 'fs';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (callback: LoadTestCallbackFn, ...rest) => {
  const folderName = path.join(__dirname, 'examples', ...rest);
  const fileNames = fs.readdirSync(folderName);

  // .filter(fn => fn === 'node-modules-source.js');
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(await callback(fileName)).toMatchSnapshot();
    });
  });
};
