import path from 'path';
import { Await } from '@component-controls/core';
import { runRelatedTests } from '../../../src';

let results: Await<ReturnType<typeof runRelatedTests>>;
beforeAll(async () => {
  results = await runRelatedTests(
    path.resolve(__dirname, '../../fixtures/story/VariantButton.tsx'),
  );
}, 100000);

describe('react story tests', () => {
  it('testResults ', () => {
    expect(results[0]).toMatchObject({
      testFileName: 'VariantButton.test.tsx',
      results: [
        {
          leaks: false,
          testResults: [
            {
              ancestorTitles: ['VariantButton'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'VariantButton primary',
              location: null,
              status: 'passed',
              title: 'primary',
            },
            {
              ancestorTitles: ['VariantButton'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'VariantButton disabled',
              location: null,
              status: 'passed',
              title: 'disabled',
            },
          ],
        },
      ],
      coverage: {
        'test/fixtures/story/VariantButton.docs.tsx': {
          lines: {
            total: 19,
            covered: 14,
            skipped: 0,
            pct: 73.68,
          },
          functions: {
            total: 7,
            covered: 2,
            skipped: 0,
            pct: 28.57,
          },
          statements: {
            total: 26,
            covered: 21,
            skipped: 0,
            pct: 80.77,
          },
          branches: {
            total: 0,
            covered: 0,
            skipped: 0,
            pct: 100,
          },
        },
        'test/fixtures/story/VariantButton.tsx': {
          lines: {
            total: 10,
            covered: 10,
            skipped: 0,
            pct: 100,
          },
          functions: {
            total: 1,
            covered: 1,
            skipped: 0,
            pct: 100,
          },
          statements: {
            total: 11,
            covered: 11,
            skipped: 0,
            pct: 100,
          },
          branches: {
            total: 14,
            covered: 9,
            skipped: 0,
            pct: 64.29,
          },
        },
      },
    });
  });
});
