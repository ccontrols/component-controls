import path from 'path';
import { run } from '../src';

type Await<T> = T extends PromiseLike<infer U> ? U : T;

let results: Await<ReturnType<typeof run>>;
beforeAll(async () => {
  results = await run('sum.test.js', path.resolve(__dirname, '../.fixtures'));
}, 50000);
test('testResults ', () => {
  expect(results.testResults[0]).toMatchObject({
    ancestorTitles: ['testing sum'],
    failureDetails: [],
    failureMessages: [],
    fullName: 'testing sum sum',
    location: null,
    numPassingAsserts: 0,
    status: 'passed',
    title: 'sum',
  });
  console.log(results.coverage);
});
