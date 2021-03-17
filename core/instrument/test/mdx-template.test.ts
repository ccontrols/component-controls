import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['mdx', 'template'], fileName, callback, {
    mdx: { transformMDX: true },
  });

describe('mdx-template', () => {
  createTest('template-bind.mdx', parsed => {
    expect(parsed).toMatchObject({
      stories: {
        john: {
          name: 'john',
          controls: {
            name: 'john',
          },
          id: 'john',
          loc: {
            start: {
              column: 24,
              line: 5,
            },
            end: {
              column: 54,
              line: 5,
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
        mary: {
          name: 'mary',
          controls: {
            name: 'mary',
          },
          id: 'mary',
          loc: {
            start: {
              column: 24,
              line: 5,
            },
            end: {
              column: 54,
              line: 5,
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
      exports: {
        default: {
          story: {
            title: 'MDX',
          },
        },
        john: {
          story: {
            name: 'john',
            controls: {
              name: 'john',
            },
          },
          render: 'Template.bind()',
        },
        mary: {
          story: {
            name: 'mary',
            controls: {
              name: 'mary',
            },
          },
          render: 'Template.bind()',
        },
      },
    });
  });
});
