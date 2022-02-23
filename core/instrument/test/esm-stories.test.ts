import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'stories'], fileName, callback);

describe('esm-stories', () => {
  createTest('named-object-export.js', async parsed => {
    expect(Object.keys(parsed.stories).length).toBe(1);
  });

  createTest('no-arguments.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 32,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
        },
      },
    });
  });

  createTest('no-story.js', async parsed => {
    expect(Object.keys(parsed.stories).length).toBe(0);
  });

  createTest('props-argument.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 35,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
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
            },
          ],
          source: 'props => {}',
        },
      },
    });
  });

  createTest('three-levels-alias.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 62,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
              value: [
                {
                  value: [
                    {
                      value: 'first',
                      name: 'first',
                      loc: {
                        start: {
                          line: 0,
                          col: 11,
                        },
                        end: {
                          line: 0,
                          col: 16,
                        },
                      },
                    },
                    {
                      value: 'last',
                      name: 'last',
                      loc: {
                        start: {
                          line: 0,
                          col: 18,
                        },
                        end: {
                          line: 0,
                          col: 22,
                        },
                      },
                    },
                  ],
                  name: 'name',
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      col: 26,
                    },
                    end: {
                      line: 0,
                      col: 29,
                    },
                  },
                },
              ],
            },
          ],
          source: '({ name: { first, last }, age }) => {}',
        },
      },
    });
  });

  createTest('two-arguments.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 46,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
              value: 'props',
              name: 'props',
              loc: {
                start: {
                  line: 0,
                  col: 1,
                },
                end: {
                  line: 0,
                  col: 6,
                },
              },
            },
            {
              value: 'context',
              name: 'context',
              loc: {
                start: {
                  line: 0,
                  col: 8,
                },
                end: {
                  line: 0,
                  col: 15,
                },
              },
            },
          ],
          source: '(props, context) => {}',
        },
      },
    });
  });

  createTest('two-levels-alias.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 52,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
              value: [
                {
                  value: 'MyNam',
                  name: 'name',
                  loc: {
                    start: {
                      line: 0,
                      col: 9,
                    },
                    end: {
                      line: 0,
                      col: 14,
                    },
                  },
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      col: 16,
                    },
                    end: {
                      line: 0,
                      col: 19,
                    },
                  },
                },
              ],
            },
          ],
          source: '({ name: MyNam, age }) => {}',
        },
      },
    });
  });

  createTest('two-levels-sub-arguments.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 45,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
              value: [
                {
                  value: 'name',
                  name: 'name',
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
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      col: 9,
                    },
                    end: {
                      line: 0,
                      col: 12,
                    },
                  },
                },
              ],
            },
          ],
          source: '({ name, age }) => {}',
        },
      },
    });
  });

  createTest('typescript.ts', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              col: 24,
              line: 2,
            },
            end: {
              col: 49,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
              value: 'props',
              name: 'props',
              loc: {
                start: {
                  line: 0,
                  col: 1,
                },
                end: {
                  line: 0,
                  col: 6,
                },
              },
            },
          ],
          source: '(props: Properties) => {}',
        },
      },
    });
  });
});
