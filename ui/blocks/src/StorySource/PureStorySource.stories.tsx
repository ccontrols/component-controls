import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import {
  PureStorySource,
  PureStorySourceProps,
  themes,
} from './PureStorySource';

export default {
  title: 'Blocks/Core/PureStorySource',
  component: PureStorySource,
};

export const simpleSource = ({
  language,
  children,
  theme,
}: PureStorySourceProps) => {
  return (
    <PureStorySource language={language} theme={theme}>
      {children}
    </PureStorySource>
  );
};

const languages: string[] = [
  'markup',
  'bash',
  'clike',
  'c',
  'cpp',
  'css',
  'javascript',
  'jsx',
  'coffeescript',
  'actionscript',
  'css-extr',
  'diff',
  'git',
  'go',
  'graphql',
  'handlebars',
  'json',
  'less',
  'makefile',
  'markdown',
  'objectivec',
  'ocaml',
  'python',
  'reason',
  'sass',
  'scss',
  'sql',
  'stylus',
  'tsx',
  'typescript',
  'wasm',
  'yaml',
];

simpleSource.story = {
  controls: {
    language: { type: 'options', options: languages, value: 'jsx' },
    children: {
      type: 'text',
      rows: 10,
      value: `
export const sample = () => {
const [state, setState] = React.useState(false);
return (
  <BooleanEditor
    name="prop"
    onChange={(name, newVal) => setState(newVal)}
    prop={{ type: ControlTypes.BOOLEAN, value: state }}
  />
);
};      
    `,
    },
    theme: { type: 'options', options: Object.keys(themes) },
  },
};

export const simplyStoryFn = () => (
  <PureStorySource
    args={[
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
    ]}
  >
    {`({ text }) => text;`}
  </PureStorySource>
);

export const props = () => {
  return (
    <PureStorySource
      args={[
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
                  column: 19,
                },
                end: {
                  line: 0,
                  column: 24,
                },
              },
            },
          ],
        },
      ]}
    >
      {`props => (<div {...props} />);`}
    </PureStorySource>
  );
};

const code = `({ height, weight, style: { border, color } }) => (
  <div height={height} weight={weight} border={border} color={color} />
);
`;

export const multiProps = () => {
  return (
    <PureStorySource
      args={[
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
                  column: 48,
                },
              },
            },
          ],
          loc: {
            start: {
              line: 0,
              column: 1,
            },
            end: {
              line: 0,
              column: 50,
            },
          },
        },
      ]}
    >
      {code}
    </PureStorySource>
  );
};

export const controlsValues = () => {
  return (
    <PureStorySource
      args={[
        {
          loc: {
            end: {
              column: 43,
              line: 0,
            },
            start: {
              column: 30,
              line: 0,
            },
          },
          name: undefined,
          value: [
            {
              loc: {
                end: {
                  column: 36,
                  line: 0,
                },
                start: {
                  column: 32,
                  line: 0,
                },
              },
              name: 'name',
              usage: [
                {
                  loc: {
                    end: {
                      column: 65,
                      line: 0,
                    },
                    start: {
                      column: 61,
                      line: 0,
                    },
                  },
                },
              ],
              value: 'name',
            },
            {
              loc: {
                end: {
                  column: 41,
                  line: 0,
                },
                start: {
                  column: 38,
                  line: 0,
                },
              },
              name: 'age',
              usage: [
                {
                  loc: {
                    end: {
                      column: 75,
                      line: 0,
                    },
                    start: {
                      column: 72,
                      line: 0,
                    },
                  },
                },
              ],
              value: 'age',
            },
          ],
        },
      ]}
      controls={{
        name: { type: ControlTypes.TEXT, value: 'Sam', defaultValue: 'Tom' },
        age: { type: ControlTypes.NUMBER, value: 19, defaultValue: 18 },
      }}
    >
      {`      export const myStory = ({ name, age }) => <Story name={name} age={age} />;`}
    </PureStorySource>
  );
};
