import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { createStoreTemplate } from '../src/store-template';
import { TemplateOptions } from '../src/types';

export const runTests = async (props: TemplateOptions): Promise<void> => {
  const { renderer, format, config, bundle, name } = props;
  const extension = format === 'ts' ? 'ts' : 'js';
  const testName = `test_${renderer}_${format}${bundle ? '_bundle' : ''}`;
  const testFileName = path.resolve(__dirname, `${testName}.test.${extension}`);
  const snapshotFileName = path.resolve(
    __dirname,
    `__snapshots__/${testName}.test.${extension}.snap`,
  );
  it(`${renderer} ${bundle ? 'bundle' : ''} ${format}`, async () => {
    try {
      let renderedFile = '';

      renderedFile = await createStoreTemplate({
        format,
        renderer,
        bundle,
        config,
        output: __dirname,
      });

      fs.writeFileSync(testFileName, renderedFile);
      if (fs.existsSync(snapshotFileName)) {
        fs.unlinkSync(snapshotFileName);
      }

      expect(renderedFile).toMatchSnapshot();
      if (name) {
        await runCLI(
          {
            testRegex: testName,
            testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
            silent: true,
            verbose: false,
            watchman: false,
          } as Config.Argv,
          [__dirname],
        );
      }
    } finally {
      if (fs.existsSync(testFileName)) {
        fs.unlinkSync(testFileName);
      }
      if (fs.existsSync(snapshotFileName)) {
        fs.unlinkSync(snapshotFileName);
      }
    }
  }, 1000000);
};
