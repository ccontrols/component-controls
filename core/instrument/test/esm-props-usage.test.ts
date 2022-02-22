import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-usage'], fileName, callback);

describe('esm-props-usage', () => {
  createTest('two-levels-alias.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          arguments: [
            {
              value: [
                {
                  value: 'MyName',
                  name: 'name',
                  loc: {
                    start: {
                      line: 0,
                      col: 9,
                    },
                    end: {
                      line: 0,
                      col: 15,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 15,
                        },
                        end: {
                          line: 1,
                          col: 21,
                        },
                      },
                    },
                  ],
                },
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      col: 17,
                    },
                    end: {
                      line: 0,
                      col: 20,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 28,
                        },
                        end: {
                          line: 1,
                          col: 31,
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
  createTest('three-levels-alias.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          arguments: [
            {
              value: [
                {
                  value: [
                    {
                      value: 'first',
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
                      name: 'first',
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 2,
                              col: 18,
                            },
                            end: {
                              line: 2,
                              col: 23,
                            },
                          },
                        },
                      ],
                    },
                    {
                      value: 'last',
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
                      name: 'last',
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 2,
                              col: 31,
                            },
                            end: {
                              line: 2,
                              col: 35,
                            },
                          },
                        },
                      ],
                    },
                  ],
                  name: 'name',
                },
                {
                  value: 'age',
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
                  name: 'age',
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 3,
                          col: 16,
                        },
                        end: {
                          line: 3,
                          col: 19,
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
  createTest('string-template.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          arguments: [
            {
              value: [
                {
                  value: 'text',
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
                  name: 'text',
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          col: 17,
                        },
                        end: {
                          line: 0,
                          col: 21,
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
  createTest('shorthand.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
          arguments: [
            {
              value: [
                {
                  name: 'value',
                  loc: {
                    start: {
                      line: 0,
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 25,
                        },
                        end: {
                          line: 1,
                          col: 30,
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
  createTest('nested-arguments.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
          arguments: [
            {
              value: [
                {
                  value: 'height',
                  name: 'height',
                  loc: {
                    start: {
                      line: 0,
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 9,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 15,
                        },
                        end: {
                          line: 1,
                          col: 21,
                        },
                      },
                    },
                  ],
                },
                {
                  value: 'weight',
                  name: 'weight',
                  loc: {
                    start: {
                      line: 0,
                      col: 11,
                    },
                    end: {
                      line: 0,
                      col: 17,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 31,
                        },
                        end: {
                          line: 1,
                          col: 37,
                        },
                      },
                    },
                  ],
                },
                {
                  value: [
                    {
                      value: 'border',
                      name: 'border',
                      loc: {
                        start: {
                          line: 0,
                          col: 28,
                        },
                        end: {
                          line: 0,
                          col: 34,
                        },
                      },
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 1,
                              col: 47,
                            },
                            end: {
                              line: 1,
                              col: 53,
                            },
                          },
                        },
                      ],
                    },
                    {
                      value: 'color',
                      name: 'color',
                      loc: {
                        start: {
                          line: 0,
                          col: 36,
                        },
                        end: {
                          line: 0,
                          col: 41,
                        },
                      },
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 1,
                              col: 62,
                            },
                            end: {
                              line: 1,
                              col: 67,
                            },
                          },
                        },
                      ],
                    },
                  ],
                  name: 'style',
                },
              ],
            },
          ],
        },
      },
    });
  });
  createTest('expression.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        selectProp: {
          arguments: [
            {
              value: [
                {
                  value: 'value',
                  name: 'value',
                  loc: {
                    start: {
                      line: 0,
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 25,
                        },
                        end: {
                          line: 1,
                          col: 30,
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
  createTest('multiple-usage.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          arguments: [
            {
              value: [
                {
                  value: 'age',
                  name: 'age',
                  loc: {
                    start: {
                      line: 0,
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 6,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 2,
                          col: 28,
                        },
                        end: {
                          line: 2,
                          col: 31,
                        },
                      },
                    },
                    {
                      loc: {
                        start: {
                          line: 3,
                          col: 16,
                        },
                        end: {
                          line: 3,
                          col: 19,
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

  createTest('empty-body.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
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
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          col: 14,
                        },
                        end: {
                          line: 0,
                          col: 18,
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
  createTest('age-and-name.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
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
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          col: 28,
                        },
                        end: {
                          line: 1,
                          col: 32,
                        },
                      },
                    },
                  ],
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
        },
      },
    });
  });
  createTest('adjust-lines.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
          name: 'myStory',
          id: 'myStory',
          arguments: [
            {
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
              value: 'props',
              name: 'props',
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      col: 20,
                    },
                    end: {
                      line: 0,
                      col: 25,
                    },
                  },
                },
              ],
            },
          ],
          source: 'props => <Story {...props} />',
        },
      },
    });
  });

  createTest('props.js', async parsed => {
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
                      col: 20,
                    },
                    end: {
                      line: 0,
                      col: 25,
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

  createTest('select-prop.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
          arguments: [
            {
              value: [
                {
                  value: 'showOptional',
                  name: 'showOptional',
                  loc: {
                    start: {
                      line: 0,
                      col: 3,
                    },
                    end: {
                      line: 0,
                      col: 15,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 4,
                          col: 7,
                        },
                        end: {
                          line: 4,
                          col: 19,
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

  createTest('two-arguments.js', async parsed => {
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
                  col: 1,
                },
                end: {
                  line: 0,
                  col: 6,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      col: 31,
                    },
                    end: {
                      line: 0,
                      col: 36,
                    },
                  },
                },
              ],
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
        },
      },
    });
  });

  createTest('two-levels-sub-arguments.js', async parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
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
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          col: 32,
                        },
                        end: {
                          line: 0,
                          col: 36,
                        },
                      },
                    },
                  ],
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
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          col: 43,
                        },
                        end: {
                          line: 0,
                          col: 46,
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
});
