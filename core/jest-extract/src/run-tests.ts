import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { findUpFile } from '@component-controls/core/node-utils';
import { log } from '@component-controls/logger';
import { TestResult, AggregatedResult } from '@jest/test-result';
import { FileCoverage, CoverageSummaryData } from 'istanbul-lib-coverage';
import fastq from 'fastq';

export const findJestConfig = (filePath: string): string =>
  path.dirname(
    findUpFile(path.dirname(filePath), [
      'package.json',
      'jest-config.js',
      'jest-config.ts',
    ]) || filePath,
  );

export interface JestResults {
  /**
   * test results
   */
  results: Pick<
    TestResult,
    'leaks' | 'memoryUsage' | 'perfStats' | 'testFilePath' | 'testResults'
  >[];

  /**
   * coverage summary data, by file
   */
  coverage: Record<string, CoverageSummaryData>;
}

interface TestWorkerInput {
  testFiles: string[];
  projectFolder: string;
  options: Partial<Config.Argv>;
}
const runTestsWorker: fastq.asyncWorker<
  unknown,
  TestWorkerInput,
  JestResults | undefined
> = async ({ testFiles, projectFolder, options }: TestWorkerInput) => {
  let runResults: {
    results: AggregatedResult;
    globalConfig: Config.GlobalConfig;
  };
  try {
    runResults = await runCLI(
      {
        rootDir: projectFolder,
        testRegex: testFiles,
        forceExit: true,
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
        ...options,
      } as Config.Argv,
      [projectFolder],
    );
  } catch (err) {
    return undefined;
  }
  const { coverageMap, testResults } = runResults.results;
  const result: JestResults = {
    results: testResults.map(
      ({ leaks, memoryUsage, perfStats, testFilePath, testResults }) => ({
        leaks,
        memoryUsage,
        perfStats: { ...perfStats },
        testFilePath: path.relative(projectFolder, testFilePath),
        testResults: [...testResults],
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
        result.coverage[path.relative(projectFolder, file)] = summary;
      }
    });
  }
  return result;
};

let queue: fastq.queueAsPromised<
  TestWorkerInput,
  JestResults | undefined
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
): Promise<JestResults> => {
  const testFiles = [path.basename(testFilePath)];
  const projectFolder = findJestConfig(testFilePath);

  return runProjectTests(testFiles, projectFolder, options);
};

/**
 * run tests within the same project (jest config file)
 * @param testFiles an array of test files to run
 * @param projectFolder fle path where the jest config/package.json file resides
 * @param options jest runCLI options
 * @returns jest test results and coverage
 */
export const runProjectTests = async (
  testFiles: string[],
  projectFolder: string,
  options: Partial<Config.Argv> = {},
): Promise<JestResults> => {
  if (!queue) {
    queue = fastq.promise(runTestsWorker, 1);
  }
  const result = await queue.push({ testFiles, projectFolder, options });
  const maxFilesReport = 2;
  const reportFiles = testFiles.slice(0, maxFilesReport);
  if (testFiles.length > maxFilesReport) {
    reportFiles.push(`...${testFiles.length - maxFilesReport} more`);
  }
  log(`tests ${projectFolder}`, reportFiles.join(', '));
  return (result as unknown) as JestResults;
};
