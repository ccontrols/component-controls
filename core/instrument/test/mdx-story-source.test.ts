import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'story-source'], fileName, callback, {
    mdx: { transformMDX: true },
  });

describe('mdx-story-source', () => {
  createTest('external-source-deconstructed-props.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        mdxStory: {
          name: 'mdx-story',
          id: 'mdxStory',
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
      doc: {
        title: 'MDX',
      },
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        mdxStory: {
          story: {
            name: 'mdx-story',
          },
          render: '({ text }) => <div>{text}</div>',
        },
      },
    });
  });

  createTest('external-source-props.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        mdxStory: {
          name: 'mdx-story',
          id: 'mdxStory',
          loc: {
            start: {
              column: 27,
              line: 3,
            },
            end: {
              column: 59,
              line: 3,
            },
          },
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
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        mdxStory: {
          story: {
            name: 'mdx-story',
          },
          render: '(props) => <div>{props.text}</div>',
        },
      },
    });
  });

  createTest('external-source.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        mdxStory: {
          name: 'mdx-story',
          id: 'mdxStory',
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

      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        mdxStory: {
          story: {
            name: 'mdx-story',
          },
          render: '() => <div>test</div>',
        },
      },
    });
  });

  createTest('simple-source-props.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        mdxStory: {
          name: 'mdx-story',
          id: 'mdxStory',
          loc: {
            start: {
              column: 31,
              line: 12,
            },
            end: {
              column: 63,
              line: 12,
            },
          },
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
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        mdxStory: {
          story: {
            name: 'mdx-story',
          },
          render: '(props) => <div>{props.text}</div>',
        },
      },
    });
  });

  createTest('simple-source.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        mdxStory: {
          name: 'mdx-story',
          id: 'mdxStory',
          loc: {
            start: {
              line: 12,
              column: 30,
            },
            end: {
              line: 14,
              column: 6,
            },
          },
          source: '<div>test 1</div>',
        },
      },
      doc: {
        title: 'MDX',
      },
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        mdxStory: {
          story: {
            name: 'mdx-story',
          },
          render: '() => (<>\n\n<div>test 1</div>\n\n</>)',
        },
      },
    });
  });
});
