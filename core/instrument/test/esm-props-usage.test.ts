import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'props-usage'], fileName, callback);

describe('esm-props-usage', () => {
  createTest('adjust-lines.any', parsed => {
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
                      column: 20,
                    },
                    end: {
                      line: 0,
                      column: 25,
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
  createTest('age-and-name.js', parsed => {
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
                          line: 1,
                          column: 28,
                        },
                        end: {
                          line: 1,
                          column: 32,
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
        },
      },
    });
  });

  createTest('empty-body.js', parsed => {
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
                          column: 14,
                        },
                        end: {
                          line: 0,
                          column: 18,
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

  createTest('expression.js', parsed => {
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
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 25,
                        },
                        end: {
                          line: 1,
                          column: 30,
                        },
                      },
                      name: {
                        loc: {
                          start: {
                            line: 1,
                            column: 25,
                          },
                          end: {
                            line: 1,
                            column: 30,
                          },
                        },
                        name: 'value',
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
                  column: 10,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('multiple-usage.js', parsed => {
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
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 6,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 2,
                          column: 28,
                        },
                        end: {
                          line: 2,
                          column: 31,
                        },
                      },
                    },
                    {
                      loc: {
                        start: {
                          line: 3,
                          column: 16,
                        },
                        end: {
                          line: 3,
                          column: 19,
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
                  column: 8,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('nested-arguments.js', parsed => {
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
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 9,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 15,
                        },
                        end: {
                          line: 1,
                          column: 21,
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
                      column: 11,
                    },
                    end: {
                      line: 0,
                      column: 17,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 31,
                        },
                        end: {
                          line: 1,
                          column: 37,
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
                          column: 28,
                        },
                        end: {
                          line: 0,
                          column: 34,
                        },
                      },
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 1,
                              column: 47,
                            },
                            end: {
                              line: 1,
                              column: 53,
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
                          column: 36,
                        },
                        end: {
                          line: 0,
                          column: 41,
                        },
                      },
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 1,
                              column: 62,
                            },
                            end: {
                              line: 1,
                              column: 67,
                            },
                          },
                        },
                      ],
                    },
                  ],
                  name: 'style',
                  loc: {
                    start: {
                      line: 0,
                      column: 26,
                    },
                    end: {
                      line: 0,
                      column: 43,
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
                  column: 45,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('props.js', parsed => {
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
                      column: 20,
                    },
                    end: {
                      line: 0,
                      column: 25,
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

  createTest('select-prop.js', parsed => {
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
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 15,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 4,
                          column: 7,
                        },
                        end: {
                          line: 4,
                          column: 19,
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
                  column: 17,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('shorthand.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        story: {
          arguments: [
            {
              value: [
                {
                  value: 'value',
                  name: 'value',
                  loc: {
                    start: {
                      line: 0,
                      column: 3,
                    },
                    end: {
                      line: 0,
                      column: 8,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 25,
                        },
                        end: {
                          line: 1,
                          column: 30,
                        },
                      },
                      shorthand: true,
                      name: {
                        loc: {
                          start: {
                            line: 1,
                            column: 25,
                          },
                          end: {
                            line: 1,
                            column: 30,
                          },
                        },
                        name: 'value',
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
                  column: 10,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('string-template.js', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        myStory: {
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
                          column: 3,
                        },
                        end: {
                          line: 0,
                          column: 7,
                        },
                      },
                      shorthand: true,
                      name: {
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
                        name: 'text',
                      },
                    },
                    {
                      loc: {
                        start: {
                          line: 0,
                          column: 17,
                        },
                        end: {
                          line: 0,
                          column: 21,
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

  createTest('three-levels-alias.js', parsed => {
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
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 2,
                              column: 18,
                            },
                            end: {
                              line: 2,
                              column: 23,
                            },
                          },
                        },
                      ],
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
                      usage: [
                        {
                          loc: {
                            start: {
                              line: 2,
                              column: 31,
                            },
                            end: {
                              line: 2,
                              column: 35,
                            },
                          },
                        },
                      ],
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
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 3,
                          column: 16,
                        },
                        end: {
                          line: 3,
                          column: 19,
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
                  column: 31,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('two-arguments.js', parsed => {
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
                  column: 1,
                },
                end: {
                  line: 0,
                  column: 6,
                },
              },
              usage: [
                {
                  loc: {
                    start: {
                      line: 0,
                      column: 31,
                    },
                    end: {
                      line: 0,
                      column: 36,
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
                  column: 8,
                },
                end: {
                  line: 0,
                  column: 15,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('two-levels-alias.js', parsed => {
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
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 15,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 15,
                        },
                        end: {
                          line: 1,
                          column: 21,
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
                      column: 17,
                    },
                    end: {
                      line: 0,
                      column: 20,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 1,
                          column: 28,
                        },
                        end: {
                          line: 1,
                          column: 31,
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
                  column: 22,
                },
              },
            },
          ],
        },
      },
    });
  });

  createTest('two-levels-sub-arguments.js', parsed => {
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
                          column: 32,
                        },
                        end: {
                          line: 0,
                          column: 36,
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
                      column: 9,
                    },
                    end: {
                      line: 0,
                      column: 12,
                    },
                  },
                  usage: [
                    {
                      loc: {
                        start: {
                          line: 0,
                          column: 43,
                        },
                        end: {
                          line: 0,
                          column: 46,
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
                  column: 14,
                },
              },
            },
          ],
        },
      },
    });
  });
});
