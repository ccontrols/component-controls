import {
  TestResult as JestTestResult,
  AssertionResult,
} from '@jest/test-result';
export interface CoverageMetrics {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export interface JestCoverage {
  lines: CoverageMetrics;
  functions: CoverageMetrics;
  statements: CoverageMetrics;
  branches: CoverageMetrics;
}

export type JestResult = Pick<
  JestTestResult,
  'leaks' | 'perfStats' | 'testFilePath'
> & {
  testResults: (Pick<
    AssertionResult,
    | 'ancestorTitles'
    | 'duration'
    | 'fullName'
    | 'status'
    | 'title'
    | 'numPassingAsserts'
  > & {
    failureDetails: { message: string }[];
  })[];
};
export interface JestTests {
  /**
   * test results
   */
  results: JestResult[];
  /**
   * coverage summary data, by file
   */
  coverage: Record<string, JestCoverage>;
}
