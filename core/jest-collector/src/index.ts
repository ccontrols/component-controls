import { runCLI } from 'jest';
import { Config } from '@jest/types';
import { AssertionResult } from '@jest/test-result';
import { FileCoverage, CoverageSummary } from 'istanbul-lib-coverage';

export interface JestResults {
  /**
   * test results
   */
  testResults: AssertionResult[];
  /**
   * coverage summary data, by file
   */
  coverage: Record<string, CoverageSummary>;
}
export const run = async (
  testFile: string,
  testFolder: string,
): Promise<JestResults> => {
  const runResults = await runCLI(
    ({
      $0: testFile,
      roots: ['.'],
      silent: true,
      verbose: false,
      reporters: [],
      collectCoverage: true,
      coverageReporters: ['none'],
      watchman: false,
    } as unknown) as Config.Argv,
    [testFolder],
  );
  const cov = runResults.results.coverageMap;
  const result: JestResults = {
    testResults: runResults.results.testResults[0].testResults,
    coverage: {},
  };
  if (cov) {
    Object.keys(cov.data).forEach(file => {
      const fc = cov.data[file] as FileCoverage;
      result.coverage[file] = fc.toSummary();
    });
  }

  return result;
};
