import path from 'path';
import { Config } from '@jest/types';
import { sync as globSync } from 'glob';
import { run, JestResults } from './run-tests';

export type RelatedTest = {
  /**
   * full name of the test file
   */
  testFileName: string;
} & JestResults;

export type RelatedTests = RelatedTest[];

export const runRelatedTests = async (
  fileName: string,
  jestConfig?: Partial<Config.Argv>,
): Promise<RelatedTests> => {
  const name = path.basename(fileName).split('.')[0];
  const fileDir = path.dirname(fileName);
  const globs = [
    `${fileDir}${path.sep}${name}*.@(test|spec).@(j|t)s?(x)`,
    `${fileDir}${path.sep}__tests__${path.sep}**${path.sep}*.@(j|t)s?(x)`,
  ];
  const testFiles = globs.reduce((acc: string[], match) => {
    const files = globSync(match, { nocase: true });
    const newFiles = files.filter(file => {
      return path.basename(file) !== 'jest.config.js';
    });
    return [...acc, ...newFiles];
  }, []);

  const results: RelatedTests = await Promise.all(
    testFiles.map(async testFile => {
      const rootDir = path.relative(
        path.resolve(path.dirname(testFile), 'config'),
        fileDir,
      );
      const result = await run(testFile, { rootDir, ...jestConfig });

      return {
        testFileName: path.relative(fileDir, testFile),
        ...result,
      } as RelatedTest;
    }),
  );

  return results;
};
