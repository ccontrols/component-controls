import path from 'path';
import { Config } from '@jest/types';
import { JestTests } from '@component-controls/core';
import { sync as globSync } from 'glob';
import { runTests } from './run-tests';

export type RelatedTest = {
  /**
   * full name of the test file
   */
  testFileName: string;
} & JestTests;

export type RelatedTests = RelatedTest[];

/**
 * find all test files related to a component file
 * @param filePath full path of the component file
 * @returns a list of file names of the tests
 */
export const getRelatedTests = (filePath: string): string[] => {
  const fileDir = path.dirname(filePath);
  const name = path.basename(filePath).split('.')[0];
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
  return testFiles;
};

export type JestConfig = Partial<Config.Argv>;
/**
 * retrieves all the tests related to a componnet file
 * @param filePath full path of the component file
 * @param jestConfig jest custom configuration
 * @returns a list of the test results
 */
export const runRelatedTests = async (
  filePath: string,
  jestConfig?: JestConfig,
): Promise<RelatedTests> => {
  const testFiles = getRelatedTests(filePath);
  const fileDir = path.dirname(filePath);
  const results: RelatedTests = await Promise.all(
    testFiles.map(async testFile => {
      const result = await runTests(testFile, { ...jestConfig });
      return {
        testFileName: path.relative(fileDir, testFile),
        ...result,
      } as RelatedTest;
    }),
  );
  return results;
};
