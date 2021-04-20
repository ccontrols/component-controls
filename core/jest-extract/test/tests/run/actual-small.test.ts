import path from 'path';
import { Await } from '@component-controls/core';
import { runTests } from '../../../src';

let results: Await<ReturnType<typeof runTests>>;
beforeAll(async () => {
  results = await runTests(
    path.resolve(__dirname, '../../fixtures/simple/sum.test.js'),
  );
}, 50000);

describe('small test', () => {
  it('testResults ', () => {
    expect(results?.results[0].testResults[0]).toMatchObject({
      ancestorTitles: ['testing sum'],
      failureDetails: [],
      failureMessages: [],
      fullName: 'testing sum sum',
      location: null,
      numPassingAsserts: 0,
      status: 'passed',
      title: 'sum',
    });
  });

  it('coverage ', () => {
    expect(results?.coverage).toMatchObject({
      'sum.js': {
        lines: {
          total: 1,
          covered: 1,
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
          total: 2,
          covered: 2,
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
    });
  });
});
