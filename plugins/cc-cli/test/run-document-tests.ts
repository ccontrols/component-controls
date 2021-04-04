import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { createDocumentTemplate } from '../src/document-template';
import { StoryTemplateOptions } from '../src/types';

export const runTests = async (
  props: Omit<StoryTemplateOptions, 'storyPath'>,
): Promise<void> => {
  const { renderer, format, config, bundle, name } = props;
  const extension = format === 'ts' ? 'ts' : 'js';
  const testName = `story_test_${renderer}_${format}${bundle ? '_bundle' : ''}`;
  const testFileName = path.resolve(__dirname, `${testName}.test.${extension}`);
  const snapshotFileName = path.resolve(
    __dirname,
    `__snapshots__/${testName}.test.${extension}.snap`,
  );
  it(`${renderer} ${bundle ? 'bundle' : ''} ${format}`, async () => {
    let renderedFile = '';
    renderedFile = await createDocumentTemplate({
      storyPath: path.resolve(__dirname, 'fixtures/VariantButton.docs.tsx'),
      format,
      name: bundle ? 'Components/Header' : undefined,
      renderer,
      bundle,
      config,
      output: __dirname,
    });

    fs.writeFileSync(testFileName, renderedFile);
    if (fs.existsSync(snapshotFileName)) {
      fs.unlinkSync(snapshotFileName);
    }
    try {
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
