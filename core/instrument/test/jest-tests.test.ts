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
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table overview',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'overview',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table noHeader',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'noHeader',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table sortable',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'sortable',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table filterable',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'filterable',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table grouping',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'grouping',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table editing',
              numPassingAsserts: 0,
              status: 'passed',
              title: 'editing',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table rowSelect',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'rowSelect',
            },
            {
              ancestorTitles: ['Table'],
              failureDetails: [],
              failureMessages: [],
              fullName: 'Table pagination',
              location: null,
              numPassingAsserts: 0,
              status: 'passed',
              title: 'pagination',
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
            total: 10,
            covered: 7,
            skipped: 0,
            pct: 70,
          },
          statements: {
            total: 56,
            covered: 55,
            skipped: 0,
            pct: 98.21,
          },
          branches: {
            total: 49,
            covered: 40,
            skipped: 0,
            pct: 81.63,
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
            total: 20,
            covered: 15,
            skipped: 0,
            pct: 75,
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
            total: 0,
            covered: 0,
            skipped: 0,
            pct: 100,
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
