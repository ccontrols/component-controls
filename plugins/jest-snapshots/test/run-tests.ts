import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { createTemplate, TemplateOptions } from '../src/templates';

export const runTests = (props: TemplateOptions): void => {
  const { renderer, format, configPath, bundle } = props;
  const extension = format === 'ts' ? 'ts' : 'js';
  const testName = `test_${renderer}_${format}${bundle ? '_bundle' : ''}`;
  const testFileName = path.resolve(__dirname, `${testName}.test.${extension}`);
  const snapshotFileName = path.resolve(
    __dirname,
    `__snapshots__/${testName}.test.${extension}.snap`,
  );
  let renderedFile = '';
  beforeAll(() => {
    renderedFile = createTemplate({
      format,
      renderer,
      bundle,
      configPath,
      out: __dirname,
    });

    fs.writeFileSync(testFileName, renderedFile);
    if (fs.existsSync(snapshotFileName)) {
      fs.unlinkSync(snapshotFileName);
    }
  });

  afterAll(() => {
    if (fs.existsSync(testFileName)) {
      fs.unlinkSync(testFileName);
    }
    if (fs.existsSync(snapshotFileName)) {
      fs.unlinkSync(snapshotFileName);
    }
  });
  it(`${renderer} ${bundle ? 'bundle' : ''} ${format}`, async () => {
    expect(renderedFile).toMatchSnapshot();

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
  }, 1000000);
};
