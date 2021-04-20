import path from 'path';
import { Await } from '@component-controls/core';
import { runTests } from '../../../src';

let results: Await<ReturnType<typeof runTests>>;
beforeAll(async () => {
  results = await runTests(
    path.resolve(
      __dirname,
      '../../../../../ui/components/src/Popover/Popover.test.ts',
    ),
    {
      collectCoverageOnlyFrom: [
        './src/Popover/Popover.tsx',
        './src/Popover/PopoverUtils.tsx',
      ],
    },
  );
}, 100000);

describe('react typescript component', () => {
  it('testResults ', () => {
    expect(results?.results[0].testResults[0]).toMatchObject({
      ancestorTitles: ['Popover'],
      fullName: 'Popover overview',
      status: 'passed',
      title: 'overview',
    });
  });

  it('coverage ', () => {
    expect(results?.coverage).toMatchObject({
      'Popover.tsx': {
        lines: {
          total: 15,
          covered: 12,
          skipped: 0,
          pct: 80,
        },
        functions: {
          total: 3,
          covered: 2,
          skipped: 0,
          pct: 66.67,
        },
        statements: {
          total: 18,
          covered: 13,
          skipped: 0,
          pct: 72.22,
        },
        branches: {
          total: 6,
          covered: 1,
          skipped: 0,
          pct: 16.67,
        },
      },
      'PopoverUtils.tsx': {
        lines: {
          total: 14,
          covered: 7,
          skipped: 0,
          pct: 50,
        },
        functions: {
          total: 4,
          covered: 0,
          skipped: 0,
          pct: 0,
        },
        statements: {
          total: 16,
          covered: 7,
          skipped: 0,
          pct: 43.75,
        },
        branches: {
          total: 8,
          covered: 0,
          skipped: 0,
          pct: 0,
        },
      },
    });
  });
});
