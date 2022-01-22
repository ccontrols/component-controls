import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'async'], fileName, callback);

describe('esm-async', () => {
  createTest('arrow-function.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: { id: 'myStory', name: 'myStory', source: '() => {}' },
      },
    });
  });

  createTest('export-function.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          id: 'myStory',
          name: 'myStory',
          source: '() {}',
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
          source: `() => {
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
                  col: 6,
                  line: 0,
                },
                start: {
                  col: 1,
                  line: 0,
                },
              },
              name: 'props',
              usage: [
                {
                  loc: {
                    end: {
                      col: 20,
                      line: 1,
                    },
                    start: {
                      col: 15,
                      line: 1,
                    },
                  },
                },
              ],
              value: 'props',
            },
          ],
          source: `(props) {
  console.log(props);
}`,
        },
      },
    });
  });
});
