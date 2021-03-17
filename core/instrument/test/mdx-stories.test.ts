import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'stories'], fileName, callback);

describe('mdx-stories', () => {
  createTest('no-name.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {},
      doc: {
        title: 'MDX',
        component: 'Button',
        mdxType: 'Meta',
      },
      exports: {},
    });
  });

  createTest('props-argument.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',
          arguments: [
            {
              value: 'props',
              name: 'props',
            },
          ],
          source: 'props => <Button />',
        },
      },
    });
  });

  createTest('story.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        smartStory: {
          name: 'smart story',
          mdxType: 'Story',
          id: 'smartStory',
          source: '<Button />',
        },
      },
    });
  });

  createTest('three-levels-alias.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',
          loc: {
            start: {
              column: 9,
              line: 18,
            },
            end: {
              column: 72,
              line: 18,
            },
          },
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
          source: '({ name: { first, last }, age }) => <Button />',
        },
      },
    });
  });

  createTest('two-arguments.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',
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
          source: '(props, context) => <Button />',
        },
      },
    });
  });

  createTest('two-levels-alias.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',

          arguments: [
            {
              value: [
                {
                  value: 'MyName',
                  name: 'name',
                  loc: {
                    start: {
                      line: 0,
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 15,
                    },
                  },
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      column: 17,
                    },
                    end: {
                      line: 0,
                      column: 20,
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
                  column: 22,
                },
              },
            },
          ],
          source: '({ name: MyName, age }) => <Button />',
        },
      },
    });
  });

  createTest('two-levels-sub-arguments.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        storyWithProps: {
          name: 'story-with-props',
          mdxType: 'Story',
          id: 'storyWithProps',
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
          source: '({ name, age }) => <Button />',
        },
      },
    });
  });
});
