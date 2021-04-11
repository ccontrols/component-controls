import path from 'path';
import { Await } from '@component-controls/core';
import { runRelatedTests } from '../../../src';

let results: Await<ReturnType<typeof runRelatedTests>>;
beforeAll(async () => {
  results = await runRelatedTests(
    path.resolve(__dirname, '../../fixtures/component/Link.react.js'),
  );
}, 100000);

describe('react link related tests', () => {
  it('testResults ', () => {
    const files = results.map(({ testFileName }) => testFileName);
    expect(files).toMatchObject([
      'link.react.controls.test.js',
      'Link.react.test.js',
      '__tests__/some_more_tests.js',
    ]);
  });

  it('sub-folder coverage ', () => {
    const result = results.find(
      ({ testFileName }) => testFileName === '__tests__/some_more_tests.js',
    );
    expect(result?.coverage).toMatchObject({
      '../Link.react.js': {
        lines: {
          total: 8,
          covered: 6,
          skipped: 0,
          pct: 75,
        },
        functions: {
          total: 4,
          covered: 2,
          skipped: 0,
          pct: 50,
        },
        statements: {
          total: 8,
          covered: 6,
          skipped: 0,
          pct: 75,
        },
        branches: {
          total: 2,
          covered: 1,
          skipped: 0,
          pct: 50,
        },
      },
    });
  });
});
