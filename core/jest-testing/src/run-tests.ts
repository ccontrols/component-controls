import fs from 'fs';
import path from 'path';
import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { AssertionResult, AggregatedResult } from '@jest/test-result';
import { FileCoverage, CoverageSummaryData } from 'istanbul-lib-coverage';

export const getUniqueFolder = (folder: string): string => {
  let fnId = 1;
  const fName = () => path.resolve(folder, `__jest-tmp-${fnId}`);
  while (fs.existsSync(fName())) {
    fnId += 1;
  }
  const folderName = fName();
  fs.mkdirSync(folderName);
  return folderName;
};
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
export const run = async (
  testFilePath: string,
  jestConfig: Partial<Config.Argv> = {},
): Promise<JestResults | undefined> => {
  const testFolder = path.dirname(testFilePath);
  const testFile = path.basename(testFilePath);
  const configFolder = getUniqueFolder(testFolder);
  const configFile = path.resolve(configFolder, 'jest.config.js');
  const { rootDir = '..', ...config } = jestConfig;
  fs.writeFileSync(
    configFile,
    `module.exports = ${JSON.stringify(
      {
        rootDir,
        preset: 'ts-jest',
        transform: {
          '^.+\\.(ts|tsx)?$': 'ts-jest',
          '^.+\\.(js|jsx)$': 'babel-jest',
        },
        collectCoverageFrom: [
          '**/*.{js,jsx,tsx,ts}',
          '!**/jest.config.js',
          '!**/*.{test,spec}.{js,jsx,tsx,ts}',
        ],
      },
      null,
      2,
    )}
  `,
    'utf8',
  );
  let runResults: {
    results: AggregatedResult;
    globalConfig: Config.GlobalConfig;
  };
  try {
    runResults = await runCLI(
      {
        testRegex: testFile,
        testPathIgnorePatterns: ['/node_modules/', '/__snapshots__/'],
        silent: true,
        verbose: false,
        reporters: [],
        coverage: true,
        coverageReporters: ['none'],
        watchman: false,
        ...config,
      } as Config.Argv,
      [configFolder],
    );
  } catch (err) {
    console.error(err);
    return undefined;
  } finally {
    fs.unlinkSync(configFile);
    fs.rmdirSync(configFolder, { recursive: true });
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
