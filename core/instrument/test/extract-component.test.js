import * as path from 'path';
import * as fs from 'fs';
import { defaultParserOptions, defaultResolveOptions } from '../src/index';
import { extractComponent } from '../src/babel/extract-component';

describe('extract-component', () => {
  const folderName = path.join(__dirname, 'examples', 'extract-component');
  const fileNames = fs.readdirSync(folderName);
  fileNames.forEach(file => {
    const fileName = path.join(folderName, file);
    it(file, async () => {
      expect(
        await extractComponent(
          'Button',
          fileName,
          defaultParserOptions,
          defaultResolveOptions,
        ),
      ).toMatchSnapshot();
    });
  });
});
