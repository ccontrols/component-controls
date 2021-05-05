import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { createStoriesTemplate } from '../src/jest-templates/stories-template';
import { StoryTemplateOptions } from '../src/utils';

export const runTests = async (
  props: Omit<StoryTemplateOptions, 'storyPath'>,
): Promise<void> => {
  const { renderer, format, config, bundle, name } = props;
  it(`${renderer} ${bundle ? 'bundle' : ''} ${format}`, async () => {
    let renderedFile = '';
    renderedFile = await createStoriesTemplate({
      storyPath: path.resolve(__dirname, 'fixtures/VariantButton.docs.tsx'),
      format,
      name: bundle ? 'VariantButton' : undefined,
      renderer,
      bundle,
      config,
      output: __dirname,
    });
    expect(renderedFile).toMatchSnapshot();
    if (name) {
      const extension = format === 'ts' ? 'ts' : 'js';
      const testName = `story_test_${renderer}_${format}${
        bundle ? '_bundle' : ''
      }`;
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
            forceExit: true,
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
