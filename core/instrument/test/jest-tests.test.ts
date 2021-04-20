import path from 'path';
import { setLogOptions } from '@component-controls/logger';
import { extractTests } from '../src/misc/jest-tests';

describe('component-tests', () => {
  beforeAll(() => {
    setLogOptions({ logLevel: 'none' });
  });
  it('Catalog', async () => {
    const tests = await extractTests([
      path.resolve(
        __dirname,
        '../../../plugins/addon-catalog/src/Catalog/Catalog.tsx',
      ),
    ]);
    expect(tests).toMatchObject({
      results: [
        {
          leaks: false,
          testFilePath: 'Catalog.test.ts',
          testResults: [
            {
              ancestorTitles: ['Catalog'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Catalog overview',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'overview',
            },
          ],
        },
      ],
      coverage: {
        'Catalog.tsx': {
          lines: {
            total: 9,
            covered: 9,
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
            total: 10,
            covered: 10,
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
  it('ComponentCard', async () => {
    const tests = await extractTests([
      path.resolve(
        __dirname,
        '../../../plugins/addon-catalog/src/ComponentCard/ComponentCard.tsx',
      ),
    ]);
    expect(tests).toMatchObject({
      results: [
        {
          leaks: false,
          testFilePath: 'ComponentCard.test.ts',
          testResults: [
            {
              ancestorTitles: ['ComponentCard'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'ComponentCard overview',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'overview',
            },
          ],
        },
      ],
      coverage: {
        'ComponentCard.tsx': {
          lines: {
            total: 20,
            covered: 19,
            skipped: 0,
            pct: 95,
          },
          functions: {
            total: 1,
            covered: 1,
            skipped: 0,
            pct: 100,
          },
          statements: {
            total: 21,
            covered: 20,
            skipped: 0,
            pct: 95.24,
          },
          branches: {
            total: 44,
            covered: 25,
            skipped: 0,
            pct: 56.82,
          },
        },
      },
    });
  }, 100000);
  it('ComponentCard', async () => {
    const tests = await extractTests([
      path.resolve(__dirname, '../../../ui/components/src/Header/Header.tsx'),
    ]);
    expect(tests).toMatchObject({
      results: [
        {
          leaks: false,
          testFilePath: 'Header.test.ts',
          testResults: [
            {
              ancestorTitles: ['Header'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Header overview',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'overview',
            },
          ],
        },
      ],
      coverage: {
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
