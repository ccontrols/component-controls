import path from 'path';
import { runRelatedTests } from '../../../src';

type Await<T> = T extends PromiseLike<infer U> ? U : T;

let results: Await<ReturnType<typeof runRelatedTests>>;
beforeAll(async () => {
  results = await runRelatedTests(
    path.resolve(__dirname, '../../fixtures/component/Link.react.js'),
  );
}, 100000);

describe('react link related tests', () => {
  it('testResults ', () => {
    const files = results.map(({ testFileName }) => testFileName);
    expect(files).toMatchObject([
      'link.react.controls.test.js',
      'Link.react.test.js',
      '__tests__/some_more_tests.js',
    ]);
  });

  it('sub-folder coverage ', () => {
    const result = results.find(
      ({ testFileName }) => testFileName === '__tests__/some_more_tests.js',
    );
    expect(result?.coverage).toMatchObject({});
  });
});
