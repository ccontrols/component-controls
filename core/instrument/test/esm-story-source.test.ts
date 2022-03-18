import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'story-source'], fileName, callback);

describe('esm-story-source', () => {
  createTest('external-source-deconstructed-props.js', async parsed => {
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
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 7,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          col: 20,
                        },
                        end: {
                          line: 0,
                          col: 24,
                        },
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    });
  });

  createTest('external-source-props.js', async parsed => {
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
                  col: 0,
                },
                end: {
                  line: 0,
                  col: 5,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      col: 15,
                    },
                    end: {
                      line: 0,
                      col: 20,
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

  createTest('external-source.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 28,
              line: 3,
            },
            end: {
              col: 49,
              line: 3,
            },
          },
          source: '() => <div>test</div>',
        },
      },
    });
  });

  createTest('simple-source-props.js', async parsed => {
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
                  col: 0,
                },
                end: {
                  line: 0,
                  col: 5,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      col: 15,
                    },
                    end: {
                      line: 0,
                      col: 20,
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

  createTest('simple-source.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 4,
            },
            end: {
              col: 45,
              line: 4,
            },
          },
          name: 'myStory',
          id: 'myStory',
          source: '() => <div>test</div>',
        },
      },
    });
  });
});
