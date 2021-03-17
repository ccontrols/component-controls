import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'template'], fileName, callback);

describe('esm-template', () => {
  createTest('template-bind.tsx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        John: {
          loc: {
            start: {
              column: 39,
              line: 10,
            },
            end: {
              column: 1,
              line: 12,
            },
          },
          name: 'John',
          id: 'John',
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
                      line: 1,
                      column: 14,
                    },
                    end: {
                      line: 1,
                      column: 19,
                    },
                  },
                },
              ],
            },
          ],
          controls: {
            name: 'john',
          },
          source: 'props => (\n  <Button {...props}>Button</Button>\n)',
        },
        Mary: {
          loc: {
            start: {
              column: 39,
              line: 10,
            },
            end: {
              column: 1,
              line: 12,
            },
          },
          name: 'Mary',
          id: 'Mary',
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
                      line: 1,
                      column: 14,
                    },
                    end: {
                      line: 1,
                      column: 19,
                    },
                  },
                },
              ],
            },
          ],
          controls: {
            name: 'mary',
          },
          source: 'props => (\n  <Button {...props}>Button</Button>\n)',
        },
      },
    });
  });

  createTest('template-doc.tsx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        John: {
          name: 'John',
          id: 'John',
          loc: {
            start: {
              column: 12,
              line: 10,
            },
            end: {
              column: 42,
              line: 10,
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
                      column: 21,
                    },
                    end: {
                      line: 0,
                      column: 26,
                    },
                  },
                },
              ],
            },
          ],
          source: 'props => <Button {...props} />',
        },
      },
      doc: {
        title: 'Introduction/Template doc',
        component: 'Button',
        smartControls: false,
        template: {
          loc: {
            start: {
              column: 12,
              line: 10,
            },
            end: {
              column: 42,
              line: 10,
            },
          },
          name: 'template',
          id: 'template',
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
                      column: 21,
                    },
                    end: {
                      line: 0,
                      column: 26,
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
});
