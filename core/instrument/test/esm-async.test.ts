import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'async'], fileName, callback);

describe('esm-async', () => {
  createTest('arrow-function.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: { id: 'myStory', name: 'myStory', source: 'async () => {}' },
      },
    });
  });

  createTest('export-function.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          id: 'myStory',
          name: 'myStory',
          source: 'async function myStory() {}',
        },
      },
    });
  });
  createTest('async-story.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        asyncStory: {
          id: 'asyncStory',
          name: 'asyncStory',
          source: `async () => {
  const response = await fetch(
    'http://dummy.restapiexample.com/api/v1/employee/1',
  );
  const { data } = await response.json();
  // eslint-disable-next-line react/display-name
  return () => <h2>{\`Hello, my name is \${data.employee_name}.\`}</h2>;
}`,
        },
      },
    });
  });

  createTest('export-function-arguments.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          id: 'myStory',
          name: 'myStory',
          arguments: [
            {
              loc: {
                end: {
                  column: 28,
                  line: 0,
                },
                start: {
                  column: 23,
                  line: 0,
                },
              },
              name: 'props',
              usage: [
                {
                  loc: {
                    end: {
                      column: 19,
                      line: 1,
                    },
                    start: {
                      column: 14,
                      line: 1,
                    },
                  },
                },
              ],
              value: 'props',
            },
          ],
          source: `async function myStory(props) {
  console.log(props);
}`,
        },
      },
    });
  });
});
