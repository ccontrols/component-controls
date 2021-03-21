import path from 'path';
import { run } from '../../src';

type Await<T> = T extends PromiseLike<infer U> ? U : T;

let results: Await<ReturnType<typeof run>>;
beforeAll(async () => {
  results = await run(
    path.resolve(__dirname, '../fixtures/simple/sum.test.js'),
  );
}, 50000);

describe('small test', () => {
  it('testResults ', () => {
    expect(results?.testResults[0]).toMatchObject({
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
        data: {
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
      },
    });
  });
});
