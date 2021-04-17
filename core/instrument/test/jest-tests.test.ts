import path from 'path';
import { setLogOptions } from '@component-controls/logger';
import { extractTests } from '../src/misc/jest-tests';

describe('component-tests', () => {
  beforeAll(() => {
    setLogOptions({ logLevel: 'none' });
  });
  it('jest extract', async () => {
    const tests = await extractTests({
      '1': path.resolve(
        __dirname,
        '../../../plugins/addon-catalog/src/Catalog/Catalog.tsx',
      ),
      '2': path.resolve(
        __dirname,
        '../../../plugins/addon-catalog/src/ComponentCard/ComponentCard.tsx',
      ),
      '3': path.resolve(
        __dirname,
        '../../../ui/components/src/Header/Header.tsx',
      ),
    });
    expect(tests).toMatchObject({
      '1': {
        results: [
          {
            leaks: false,
            memoryUsage: undefined,
            testFilePath: 'src/Catalog/Catalog.test.ts',
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
          'src/Catalog/Catalog.tsx': {
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
      },
      '2': {
        results: [
          {
            leaks: false,
            memoryUsage: undefined,
            testFilePath: 'src/ComponentCard/ComponentCard.test.ts',
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
          'src/ComponentCard/ComponentCard.tsx': {
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
              covered: 35,
              skipped: 0,
              pct: 79.55,
            },
          },
        },
      },
      '3': {
        results: [
          {
            leaks: false,
            memoryUsage: undefined,
            testFilePath: 'src/Header/Header.test.ts',
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
          'src/Header/Header.tsx': {
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
      },
    });
  }, 100000);
});
