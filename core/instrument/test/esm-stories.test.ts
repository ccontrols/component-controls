import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'stories'], fileName, callback);

describe('esm-stories', () => {
  createTest('named-object-export.js', parsed => {
    expect(Object.keys(parsed.stories).length).toBe(0);
  });

  createTest('no-arguments.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 31,
              line: 2,
            },
          },
          name: 'myStory',
          id: 'myStory',
          arguments: [],
        },
      },
    });
  });

  createTest('no-story.js', parsed => {
    expect(Object.keys(parsed.stories).length).toBe(0);
  });

  createTest('props-argument.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 34,
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
                  column: 0,
                },
                end: {
                  line: 0,
                  column: 5,
                },
              },
            },
          ],
          source: 'props => {}',
        },
      },
    });
  });

  createTest('three-levels-alias.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 61,
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
                          column: 11,
                        },
                        end: {
                          line: 0,
                          column: 16,
                        },
                      },
                    },
                    {
                      value: 'last',
                      name: 'last',
                      loc: {
                        start: {
                          line: 0,
                          column: 18,
                        },
                        end: {
                          line: 0,
                          column: 22,
                        },
                      },
                    },
                  ],
                  name: 'name',
                  loc: {
                    start: {
                      line: 0,
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 24,
                    },
                  },
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      column: 26,
                    },
                    end: {
                      line: 0,
                      column: 29,
                    },
                  },
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
                  column: 31,
                },
              },
            },
          ],
          source: '({ name: { first, last }, age }) => {}',
        },
      },
    });
  });

  createTest('two-arguments.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 45,
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
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 6,
                },
              },
            },
            {
              value: 'context',
              name: 'context',
              loc: {
                start: {
                  line: 0,
                  column: 8,
                },
                end: {
                  line: 0,
                  column: 15,
                },
              },
            },
          ],
          source: '(props, context) => {}',
        },
      },
    });
  });

  createTest('two-levels-alias.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 51,
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
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 14,
                    },
                  },
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      column: 16,
                    },
                    end: {
                      line: 0,
                      column: 19,
                    },
                  },
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
                  column: 21,
                },
              },
            },
          ],
          source: '({ name: MyNam, age }) => {}',
        },
      },
    });
  });

  createTest('two-levels-sub-arguments.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 44,
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
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 7,
                    },
                  },
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 12,
                    },
                  },
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
                  column: 14,
                },
              },
            },
          ],
          source: '({ name, age }) => {}',
        },
      },
    });
  });

  createTest('typescript.ts', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          loc: {
            start: {
              column: 23,
              line: 2,
            },
            end: {
              column: 48,
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
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 18,
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
