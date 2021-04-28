import path from 'path';
import { setLogOptions } from '@component-controls/logger';
import { extractTests } from '../src/misc/jest-tests';

describe('component-tests', () => {
  beforeAll(() => {
    setLogOptions({ logLevel: 'none' });
  });
  it('Table', async () => {
    const tests = await extractTests([
      path.resolve(__dirname, '../../../ui/components/src/Table/Table.tsx'),
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/TableFilter.tsx',
      ),
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/TableGrouping.tsx',
      ),
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/TablePagination.tsx',
      ),
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/TableRowSelection.tsx',
      ),
      path.resolve(
        __dirname,
        '../../../ui/components/src/Table/useTableLayout.ts',
      ),
    ]);
    expect(tests).toMatchObject({
      results: [
        {
          leaks: false,
          testFilePath: 'Table.test.ts',
          testResults: [
            {
              ancestorTitles: ['Table', 'overview'],
              fullName: 'Table overview snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'overview'],
              fullName: 'Table overview accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'noHeader'],
              fullName: 'Table noHeader snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'noHeader'],
              fullName: 'Table noHeader accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'sortable'],
              fullName: 'Table sortable snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'sortable'],
              fullName: 'Table sortable accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'filterable'],
              fullName: 'Table filterable snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'filterable'],
              fullName: 'Table filterable accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'grouping'],
              fullName: 'Table grouping snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'grouping'],
              fullName: 'Table grouping accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'editing'],
              fullName: 'Table editing snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'editing'],
              fullName: 'Table editing accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'rowSelect'],
              fullName: 'Table rowSelect snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'rowSelect'],
              fullName: 'Table rowSelect accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'pagination'],
              fullName: 'Table pagination snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Table', 'pagination'],
              fullName: 'Table pagination accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
            },
          ],
        },
      ],
      coverage: {
        'Table.tsx': {
          lines: {
            total: 51,
            covered: 50,
            skipped: 0,
            pct: 98.04,
          },
          functions: {
            total: 11,
            covered: 7,
            skipped: 0,
            pct: 63.64,
          },
          statements: {
            total: 57,
            covered: 56,
            skipped: 0,
            pct: 98.25,
          },
          branches: {
            total: 50,
            covered: 40,
            skipped: 0,
            pct: 80,
          },
        },
        'TableFilter.tsx': {
          lines: {
            total: 6,
            covered: 5,
            skipped: 0,
            pct: 83.33,
          },
          functions: {
            total: 2,
            covered: 1,
            skipped: 0,
            pct: 50,
          },
          statements: {
            total: 6,
            covered: 5,
            skipped: 0,
            pct: 83.33,
          },
          branches: {
            total: 4,
            covered: 1,
            skipped: 0,
            pct: 25,
          },
        },
        'TableGrouping.tsx': {
          lines: {
            total: 20,
            covered: 19,
            skipped: 0,
            pct: 95,
          },
          functions: {
            total: 8,
            covered: 8,
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
            total: 22,
            covered: 16,
            skipped: 0,
            pct: 72.73,
          },
        },
        'TableRowSelection.tsx': {
          lines: {
            total: 8,
            covered: 8,
            skipped: 0,
            pct: 100,
          },
          functions: {
            total: 5,
            covered: 5,
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
            total: 2,
            covered: 1,
            skipped: 0,
            pct: 50,
          },
        },
        'useTableLayout.ts': {
          lines: {
            total: 7,
            covered: 7,
            skipped: 0,
            pct: 100,
          },
          functions: {
            total: 3,
            covered: 3,
            skipped: 0,
            pct: 100,
          },
          statements: {
            total: 8,
            covered: 8,
            skipped: 0,
            pct: 100,
          },
          branches: {
            total: 4,
            covered: 4,
            skipped: 0,
            pct: 100,
          },
        },
        'TablePagination.tsx': {
          lines: {
            total: 17,
            covered: 9,
            skipped: 0,
            pct: 52.94,
          },
          functions: {
            total: 10,
            covered: 3,
            skipped: 0,
            pct: 30,
          },
          statements: {
            total: 18,
            covered: 10,
            skipped: 0,
            pct: 55.56,
          },
          branches: {
            total: 24,
            covered: 8,
            skipped: 0,
            pct: 33.33,
          },
        },
      },
    });
  }, 100000);

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
              ancestorTitles: ['Catalog', 'overview'],
              fullName: 'Catalog overview snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Catalog', 'overview'],
              fullName: 'Catalog overview accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
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
  it('Header', async () => {
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
              ancestorTitles: ['Header', 'overview'],
              fullName: 'Header overview snapshot',
              status: 'passed',
              title: 'snapshot',
              numPassingAsserts: 0,
              failureDetails: [],
            },
            {
              ancestorTitles: ['Header', 'overview'],
              fullName: 'Header overview accessibility',
              status: 'passed',
              title: 'accessibility',
              numPassingAsserts: 0,
              failureDetails: [],
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
