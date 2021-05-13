import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { setLogOptions } from '@component-controls/logger';
import { createStoreTemplate } from '../src/jest-templates/store-template';
import { TemplateOptions, formatExtension } from '../src/utils';

export const runTests = async (props: TemplateOptions): Promise<void> => {
  const { renderer, format, config, bundle, name } = props;
  setLogOptions({ logLevel: 'none' });
  it(`${renderer} ${bundle ? 'bundle' : ''} ${format}`, async () => {
    let renderedFile = '';
    renderedFile = await createStoreTemplate({
      format,
      renderer,
      bundle,
      config,
      output: __dirname,
      seed: 123456,
    });
    expect(renderedFile).toMatchSnapshot();
    if (name) {
      const extension = formatExtension(format);
      const testName = `test_${renderer}_${format}${bundle ? '_bundle' : ''}`;
      const testFileName = path.resolve(
        __dirname,
        `${testName}.test.${extension}`,
      );
      const snapshotFileName = path.resolve(
        __dirname,
        `__snapshots__/${testName}.test.${extension}.snap`,
      );

      fs.writeFileSync(testFileName, renderedFile);
      if (fs.existsSync(snapshotFileName)) {
        fs.unlinkSync(snapshotFileName);
      }
      try {
        await runCLI(
          {
            testRegex: testName,
            testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
            detectOpenHandles: true,
            runInBand: true,
            silent: true,
            verbose: false,
            watchman: false,
          } as any,
          [__dirname],
        );
      } finally {
        if (fs.existsSync(testFileName)) {
          fs.unlinkSync(testFileName);
        }
        if (fs.existsSync(snapshotFileName)) {
          fs.unlinkSync(snapshotFileName);
        }
      }
    }
  }, 1000000);
};
