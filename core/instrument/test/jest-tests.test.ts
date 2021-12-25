import path from 'path';
import { setLogOptions } from '@component-controls/logger';
import { extractTests } from '../src/misc/jest-tests';

describe('component-tests', () => {
  beforeAll(() => {
    setLogOptions({ logLevel: 'none' });
  });
  it('Table', async () => {
    const tests = await extractTests(
      [
        path.resolve(
          __dirname,
          '../../../ui/components/src/Table/Table.test.ts',
        ),
      ],
      [
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
      ],
      [],
    );
    expect(tests).toMatchSnapshot();
  }, 100000);

  it('Catalog', async () => {
    const tests = await extractTests(
      [
        path.resolve(
          __dirname,
          '../../../plugins/addon-catalog/src/Catalog/Catalog.test.ts',
        ),
      ],
      [
        path.resolve(
          __dirname,
          '../../../plugins/addon-catalog/src/Catalog/Catalog.tsx',
        ),
      ],
      [],
    );
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
    const tests = await extractTests(
      [
        path.resolve(
          __dirname,
          '../../../ui/components/src/Header/Header.test.ts',
        ),
      ],
      [path.resolve(__dirname, '../../../ui/components/src/Header/Header.tsx')],
      [],
    );
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
