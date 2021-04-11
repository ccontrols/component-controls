import path from 'path';
import { Await } from '@component-controls/core';
import { runTests } from '../../../src';

let results: Await<ReturnType<typeof runTests>>;
beforeAll(async () => {
  results = await runTests(
    path.resolve(__dirname, '../../fixtures/component/Link.react.test.js'),
  );
}, 50000);

describe('react link component', () => {
  it('testResults ', () => {
    expect(results?.testResults[0]).toMatchObject({
      ancestorTitles: [],
      failureDetails: [],
      failureMessages: [],
      fullName: 'Link changes the class when hovered',
      location: null,
      numPassingAsserts: 0,
      status: 'passed',
      title: 'Link changes the class when hovered',
    });
  });

  it('coverage ', () => {
    expect(results?.coverage).toMatchObject({
      'Link.react.js': {
        lines: {
          total: 8,
          covered: 8,
          skipped: 0,
          pct: 100,
        },
        functions: {
          total: 4,
          covered: 4,
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
          total: 2,
          covered: 1,
          skipped: 0,
          pct: 50,
        },
      },
    });
  });
});
