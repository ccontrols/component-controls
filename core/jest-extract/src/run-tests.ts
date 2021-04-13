import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { findUpFile } from '@component-controls/core/node-utils';
import { log } from '@component-controls/logger';
import { AssertionResult, AggregatedResult } from '@jest/test-result';
import { FileCoverage, CoverageSummaryData } from 'istanbul-lib-coverage';
import fastq from 'fastq';

export interface JestResults {
  /**
   * test results
   */
  testResults: AssertionResult[];
  /**
   * coverage summary data, by file
   */
  coverage: Record<string, CoverageSummaryData>;
}

interface TestWorkerInput {
  testFilePath: string;
  jestConfig: Partial<Config.Argv>;
}
const runTestsWorker: fastq.asyncWorker<
  unknown,
  TestWorkerInput,
  JestResults | undefined
> = async ({ testFilePath, jestConfig }: TestWorkerInput) => {
  const testFolder = path.dirname(testFilePath);
  const testFile = path.basename(testFilePath);
  const configFolder = path.dirname(
    findUpFile(testFolder, ['package.json', 'jest-config.js']) || testFolder,
  );
  let runResults: {
    results: AggregatedResult;
    globalConfig: Config.GlobalConfig;
  };
  try {
    runResults = await runCLI(
      {
        rootDir: configFolder,
        testRegex: testFile,
        maxWorkers: 1,
        testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
        silent: true,
        verbose: false,
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
        ...jestConfig,
      } as Config.Argv,
      [configFolder],
    );
  } catch (err) {
    return undefined;
  }
  const cov = runResults.results.coverageMap;
  if (runResults.results.testResults.length !== 1) {
    throw `More than one test results returned ${runResults.results.testResults.length}`;
  }
  const result: JestResults = {
    testResults: runResults.results.testResults[0].testResults,
    coverage: {},
  };
  if (cov) {
    Object.keys(cov.data).forEach(file => {
      const fc = cov.data[file] as FileCoverage;
      const summary = fc.toSummary().toJSON();
      const totals = Object.values(summary).reduce(
        (total, value) => total + value.covered + value.skipped,
        0,
      );
      if (totals) {
        result.coverage[path.relative(testFolder, file)] = summary;
      }
    });
  }
  return result;
};

let queue: fastq.queueAsPromised<
  TestWorkerInput,
  JestResults | undefined
> | null = null;

export const runTests = async (
  testFilePath: string,
  jestConfig: Partial<Config.Argv> = {},
): Promise<JestResults> => {
  if (!queue) {
    queue = fastq.promise(runTestsWorker, 1);
  }
  const result = await queue.push({ testFilePath, jestConfig });
  log(`tests results`, path.basename(testFilePath));
  return (result as unknown) as JestResults;
};
