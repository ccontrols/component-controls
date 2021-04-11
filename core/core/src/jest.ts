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

export interface JestTestFile {
  testFileName: string;
  testResults: JestTestResults[];
  coverage: Record<string, JestCoverage>;
}

export type JestTests = JestTestFile[];
