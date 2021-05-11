import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { error } from '@component-controls/logger';
import { JestTests } from '@component-controls/core';
import { findUpFile } from '@component-controls/core/node-utils';
import { AggregatedResult } from '@jest/test-result';
import { FileCoverage } from 'istanbul-lib-coverage';
import fastq from 'fastq';

export const findJestConfig = (filePath: string): string =>
  path.dirname(
    findUpFile(path.dirname(filePath), [
      'package.json',
      'jest-config.js',
      'jest-config.ts',
    ]) || filePath,
  );

interface RunTestsInput {
  /**
   * related test files to execute
   */
  testFiles: string[];
  /**
   * the folder with jest configuration or package.json
   */
  projectFolder: string;
  /**
   * if supplied, this is the folder from which to report the file names relative to
   * for example this could be the folder where the tested component resides
   */
  relativeFolder?: string;
  /**
   * jest options. Can provide collectCoverageOnlyFrom to limit the files coverage is collected from
   */
  options: Partial<Config.Argv>;
}
const runTestsWorker: fastq.asyncWorker<
  unknown,
  RunTestsInput,
  JestTests | undefined
> = async ({
  testFiles,
  projectFolder,
  options,
  relativeFolder,
}: RunTestsInput) => {
  let runResults: {
    results: AggregatedResult;
    globalConfig: Config.GlobalConfig;
  };
  try {
    const nodeEnv = process.env.NODE_ENV;
    process.env.NODE_ENV = 'test';
    try {
      runResults = await runCLI(
        {
          rootDir: projectFolder,
          testRegex: testFiles,
          forceExit: true,
          testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
          silent: true,
          testTimeout: 100000,
          reporters: [],
          coverage: true,
          coverageReporters: ['none'],
          watchman: false,
          collectCoverageFrom: [
            '**/*.{js,jsx,tsx,ts}',
            '!**/jest.config.js',
            '!**/*.{test,spec}.{js,jsx,tsx,ts}',
          ],
          ...options,
        } as Config.Argv,
        [projectFolder],
      );
    } finally {
      process.env.NODE_ENV = nodeEnv;
    }
  } catch (err) {
    error(testFiles[0], err);
    return undefined;
  }
  const { coverageMap, testResults } = runResults.results;
  const relFolder = relativeFolder || projectFolder;
  const result: JestTests = {
    results: testResults.map(
      ({ leaks, perfStats, testFilePath, testResults }) => ({
        leaks,
        perfStats,
        testFilePath: path.relative(relFolder, testFilePath),
        testResults: testResults.map(
          ({
            ancestorTitles,
            duration,
            fullName,
            status,
            title,
            numPassingAsserts,
            failureDetails,
          }) => ({
            ancestorTitles,
            duration,
            fullName,
            status,
            title,
            numPassingAsserts,
            failureDetails: (failureDetails as { message: string }[]).map(
              failure => ({
                message: failure.message,
              }),
            ),
          }),
        ),
      }),
    ),
    coverage: {},
  };
  if (coverageMap) {
    Object.keys(coverageMap.data).forEach(file => {
      const fc = coverageMap.data[file] as FileCoverage;
      const summary = fc.toSummary().toJSON();
      const totals = Object.values(summary).reduce(
        (total, value) => total + value.covered + value.skipped,
        0,
      );
      if (totals) {
        result.coverage[path.relative(relFolder, file)] = summary;
      }
    });
  }
  return result;
};

let queue: fastq.queueAsPromised<
  RunTestsInput,
  JestTests | undefined
> | null = null;

/**
 * single test file execution
 * @param testFilePath test file full path
 * @param options jest runCLI options
 * @returns jest test results and coverage
 */
export const runTests = async (
  testFilePath: string,
  options: Partial<Config.Argv> = {},
): Promise<JestTests> => {
  const testFiles = [path.basename(testFilePath)];
  const projectFolder = findJestConfig(testFilePath);
  const relativeFolder = path.dirname(testFilePath);

  return runProjectTests({ testFiles, relativeFolder, projectFolder, options });
};

/**
 * run tests within the same project (jest config file)
 * @param testFiles an array of test files to run
 * @param projectFolder fle path where the jest config/package.json file resides
 * @param options jest runCLI options
 * @returns jest test results and coverage
 */
export const runProjectTests = async (
  props: RunTestsInput,
): Promise<JestTests> => {
  if (!queue) {
    queue = fastq.promise(runTestsWorker, 1);
  }
  const result = await queue.push(props);
  return (result as unknown) as JestTests;
};
