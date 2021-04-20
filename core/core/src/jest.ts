import { TestResult } from '@jest/test-result';
export interface JestTestResults {
  ancestorTitles: string[];
  failureDetails: unknown[];
  failureMessages: string[];
  numPassingAsserts: number;
  status: 'passed' | 'failed' | 'skipped' | 'pending' | 'todo' | 'disabled';
  title: string;
}

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

export interface JestTests {
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
  coverage: Record<string, JestCoverage>;
}
