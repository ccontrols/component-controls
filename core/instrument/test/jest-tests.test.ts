import path from 'path';
import { extractJestTests } from '../src/misc/jest-tests';

describe('component-tests', () => {
  it('', async () => {
    const tests = await extractJestTests(
      path.resolve(__dirname, '../../../ui/components/src/Header/Header.tsx'),
    );
    expect(tests).toMatchObject({
      testFileName: 'Header.test.ts',
      testResults: [
        {
          ancestorTitles: ['Header'],
          failureDetails: [],
          failureMessages: [],
          numPassingAsserts: 0,
          status: 'passed',
          title: 'overview',
        },
      ],
      coverage: {
        'Header.stories.tsx': {
          lines: {
            total: 4,
            covered: 4,
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
            total: 6,
            covered: 6,
            skipped: 0,
            pct: 100,
          },
          branches: {
            total: 0,
            covered: 0,
            skipped: 0,
            pct: 100,
          },
        },
        'Header.tsx': {
          lines: {
            total: 2,
            covered: 2,
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
            total: 6,
            covered: 6,
            skipped: 0,
            pct: 100,
          },
          branches: {
            total: 0,
            covered: 0,
            skipped: 0,
            pct: 100,
          },
        },
      },
    });
  }, 100000);
});
