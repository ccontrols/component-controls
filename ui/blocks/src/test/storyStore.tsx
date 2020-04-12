/* eslint-disable react/display-name */
import React from 'react';
import { StoryStore, Store } from '@component-controls/store';
import { StoriesStore, ControlTypes } from '@component-controls/specification';
import { Donut, Button, Heading } from 'theme-ui';

const store: StoriesStore = {
  components: {
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js': {
      from: '../../components/button-default-arrow-func',
      importedName: 'default',
      name: 'ArrowButton',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
    },
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js': {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
      info: {
        description: `
Markdown descripton for component.

# With a heading

and a [link](https://google.com)
        `,
        displayName: 'typescript',
        props: {
          optionalArray: {
            parentName: 'MyComponentProps',
            type: {
              name: 'array',
              raw: 'any[]',
              value: [
                {
                  name: 'any',
                },
              ],
            },
          },
          optionalArrayOf: {
            parentName: 'MyComponentProps',
            type: {
              name: 'array',
              raw: 'number[]',
              value: [
                {
                  name: 'number',
                },
              ],
            },
          },
          optionalBool: {
            parentName: 'MyComponentProps',
            type: {
              name: 'boolean',
              raw: 'boolean',
            },
          },
          optionalElement: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          optionalElementType: {
            parentName: 'MyComponentProps',
            type: {
              name: 'Element',
              raw: 'Element',
            },
          },
          optionalEnum: {
            parentName: 'MyComponentProps',
            type: {
              name: 'enum',
              raw: '"News" | "Photos"',
              value: [
                {
                  name: 'string',
                  value: 'News',
                },
                {
                  name: 'string',
                  value: 'Photos',
                },
              ],
            },
          },
          optionalFunc: {
            parentName: 'MyComponentProps',
            type: {
              name: 'function',
              raw: '(args: any) => any',
            },
          },
          optionalMessage: {
            parentName: 'MyComponentProps',
            type: {
              name: 'Message',
              raw: 'Message',
            },
          },
          optionalNode: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
            },
          },
          optionalNumber: {
            defaultValue: 21,
            parentName: 'MyComponentProps',
            type: {
              name: 'number',
              raw: 'number',
            },
          },
          optionalObject: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: 'object',
            },
          },
          optionalObjectOf: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ [key: string]: number; }',
            },
          },
          optionalObjectWithShape: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ optionalProperty?: string; requiredProperty: number; }',
            },
          },
          optionalObjectWithStrictShape: {
            parentName: 'MyComponentProps',
            type: {
              name: 'object',
              raw: '{ optionalProperty?: string; requiredProperty: number; }',
            },
          },
          optionalString: {
            parentName: 'MyComponentProps',
            type: {
              name: 'string',
              raw: 'string',
            },
          },
          optionalSymbol: {
            parentName: 'MyComponentProps',
            type: {
              name: 'symbol',
              raw: 'symbol',
            },
          },
          optionalUnion: {
            parentName: 'MyComponentProps',
            type: {
              name: 'union',
              raw: 'string | number | Message',
              value: [
                {
                  name: 'string',
                },
                {
                  name: 'number',
                },
                {
                  name: 'Message',
                },
              ],
            },
          },
          requiredAny: {
            parentName: 'MyComponentProps',
            type: {
              name: 'any',
              raw: 'any',
              required: true,
            },
          },
          requiredFunc: {
            parentName: 'MyComponentProps',
            type: {
              name: 'function',
              raw: '(prop: any) => any',
              required: true,
            },
          },
        },
      },
    },
    '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/custom-controls.js': {
      from: '../../components/button-named-arrow-func',
      importedName: 'Button',
      name: 'Button',
      request:
        '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
      info: {
        description: '',
        displayName: 'Control',
        props: {
          name: {
            type: {
              name: 'string',
            },
            description: 'a name property',
          },
          age: {
            type: {
              name: 'number',
            },
            description: 'age is a number property',
          },
        },
      },
    },
  },
  kinds: {
    Story: {
      components: {
        ArrowButton:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-default-arrow-func.js',
        Button:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/button-named-arrow-func.js',
        Control:
          '/Users/atanasster/component-controls/core/instrument/test/fixtures/components/custom-controls.js',
      },
      title: 'Story',
      stories: [
        'id-of-story',
        'id-of-single',
        'id-of-button-story',
        'blocks-core-story-plain--controls',
      ],
    },
  },
  stories: {
    'id-of-story': {
      renderFn: () => <Heading>Components</Heading>,
      id: 'id-of-story',
      kind: 'Story',
      component: 'ArrowButton',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'story',
      source: "() => 'hello'",
      subcomponents: {
        'My Button Tab': 'Button',
      },
      parameters: {
        componentSubtitle: 'story subtitle',
      },
    },
    'id-of-single': {
      id: 'id-of-single',
      renderFn: () => <Heading>Components</Heading>,
      kind: 'Story',
      component: 'ArrowButton',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'story',
      source: "() => 'hello'",
      subcomponents: {
        'My Button Tab': 'Button',
      },
      parameters: {
        componentSubtitle: 'story subtitle',
      },
    },
    'id-of-button-story': {
      id: 'id-of-button-story',
      renderFn: () => <Button>test</Button>,
      kind: 'Story',
      component: 'Button',
      loc: {
        end: {
          column: 34,
          line: 8,
        },
        start: {
          column: 21,
          line: 8,
        },
      },
      name: 'button',
      source: "() => 'hello'",
    },
    'blocks-core-story-plain--controls': {
      renderFn: () => <Donut value={1 / 2} />,
      id: 'blocks-core-story-plain--controls',
      kind: 'Story',
      name: 'controls',
      component: 'Control',
      controls: {
        name: {
          type: ControlTypes.TEXT,
          label: 'Name',
          value: 'Mark',
        },
        age: {
          type: ControlTypes.NUMBER,
          label: 'Age',
          value: 19,
        },
      },
      arguments: [
        {
          loc: {
            end: {
              column: 14,
              line: 0,
            },
            start: {
              column: 1,
              line: 0,
            },
          },
          name: undefined,
          value: [
            {
              loc: {
                end: {
                  column: 7,
                  line: 0,
                },
                start: {
                  column: 3,
                  line: 0,
                },
              },
              name: 'name',
              usage: [
                {
                  loc: {
                    end: {
                      column: 32,
                      line: 1,
                    },
                    start: {
                      column: 28,
                      line: 1,
                    },
                  },
                },
              ],
              value: 'name',
            },
            {
              loc: {
                end: {
                  column: 12,
                  line: 0,
                },
                start: {
                  column: 9,
                  line: 0,
                },
              },
              name: 'age',
              value: 'age',
              usage: [
                {
                  loc: {
                    end: {
                      column: 49,
                      line: 1,
                    },
                    start: {
                      column: 46,
                      line: 1,
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
      source: `({ name, age }) => (
  <h2>{\`Hello, my name is \${name}, and I am \${age} years old.\`}</h2>
);
`,
    },
    'id-no-component': {
      renderFn: () => <Heading>Components</Heading>,
      id: 'id-no-component',
      kind: 'Story',
      name: 'no component',
      source: "() => 'hello'",
    },
  },
};
export const storyStore = new Store({ store, updateLocalStorage: false });
