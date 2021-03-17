import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'story-source'], fileName, callback);

describe('esm-story-source', () => {
  createTest('external-source-deconstructed-props.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          source: '({ text }) => <div>{text}</div>',
          arguments: [
            {
              value: [
                {
                  value: 'text',
                  name: 'text',
                  loc: {
                    start: {
                      line: 0,
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 7,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          column: 20,
                        },
                        end: {
                          line: 0,
                          column: 24,
                        },
                      },
                    },
                  ],
                },
              ],
              name: undefined,
              loc: {
                start: {
                  line: 0,
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 9,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('external-source-props.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          source: 'props => <div>{props.text}</div>',
          arguments: [
            {
              value: 'props',
              name: 'props',
              loc: {
                start: {
                  line: 0,
                  column: 0,
                },
                end: {
                  line: 0,
                  column: 5,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      column: 15,
                    },
                    end: {
                      line: 0,
                      column: 20,
                    },
                  },
                },
              ],
            },
          ],
        },
      },
    });
  });

  createTest('external-source.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 27,
              line: 3,
            },
            end: {
              column: 48,
              line: 3,
            },
          },
          source: '() => <div>test</div>',
          arguments: [],
        },
      },
    });
  });

  createTest('simple-source-props.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          arguments: [
            {
              value: 'props',
              name: 'props',
              loc: {
                start: {
                  line: 0,
                  column: 0,
                },
                end: {
                  line: 0,
                  column: 5,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      column: 15,
                    },
                    end: {
                      line: 0,
                      column: 20,
                    },
                  },
                },
              ],
            },
          ],
          source: 'props => <div>{props.text}</div>',
        },
      },
    });
  });

  createTest('simple-source.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 4,
            },
            end: {
              column: 44,
              line: 4,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [],
          source: '() => <div>test</div>',
        },
      },
    });
  });
});
